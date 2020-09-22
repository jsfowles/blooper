
var $ = function(id) { return document.getElementById(id); };
function debug( text )
{
    //var element = document.createElement( "LI" ); 
    //var line = document.createTextNode( text );
    //element.appendChild( line ); 
    //document.getElementById("debug").appendChild(element); 
}

window.addEventListener('load', function()
{	
    if(navigator.requestMIDIAccess) {
        navigator.requestMIDIAccess({sysex:true}).then(_on_midi_success,_on_midi_failure);
    }
    else document.write( "USB/MIDI is not available." );
});

var _discover_session = 0, _ready = false;
var _session_times = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var _session_counts = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var _midi_input_port = 0, _midi_output_port = 0;
var _dfu_dnload_count = 0, _dfu_dnload_data = 0, _dfu_dnload_size = 0;
var _wave_dnload_session = 0, _wave_dnload_track = 0;
var _wave_dnload_data = [], _wave_dnload_length = 0, _wave_dnload_offset = 0;
var _wave_upload_count = 0, _wave_upload_data = [], _wave_upload_size = 0;

function _on_midi_success( midiAccess )
{
    console.log(midiAccess);
    midiAccess.onstatechange = _on_midi_connect;
    var event = {
        currentTarget: midiAccess
    };
    _on_midi_connect( event );
}

function _on_midi_failure( error )
{
    console.log('on midi failure', error)
    //document.write( "MIDI access denied." );
    $('message').innerHTML = "MIDI access blocked by Chrome";
}

function _on_midi_connect( event )
{
    var midi_access  = event.currentTarget;
    var midi_inputs  = event.currentTarget.inputs.values ();
    var midi_outputs = event.currentTarget.outputs.values();

    console.log('on midi connect', event)
    _ready = false;;

    //console.log( midi_inputs );
    $('message').innerHTML = "(Not detected)";

    $('update').disabled = true;
    for( var session = 1; session <= 16; ++session ) {
        $('session_'+session).innerHTML = "Session " + session;
        $('length_'+session).innerHTML = "0.0";
        for( var track = 1; track <= 8; ++track ) {
            $("dnload_"+session+"_"+track).disabled = true;
        }
    }
    for( var ii = 1; ii <= 6; ++ii ) $('bankA'+ii).disabled = true;
    for( var ii = 1; ii <= 6; ++ii ) $('bankB'+ii).disabled = true;

    for( var port = midi_inputs.next(); !port.done; port = midi_inputs.next() ) {
        
        debug( "MIDI Port: Manufacturer='" + port.value.manufacturer +
               "' Name='" + port.value.name +
               "' Type='" + port.value.type +
               "' State='" + port.value.state +
               "' Conn='" + port.value.connection );
        
        if( port.value.manufacturer.includes("Blooper") || port.value.name.includes("Blooper") ) {
            port.value.onmidimessage = _on_midi_message;
            if( port.value.connection == "open" ) _midi_input_port = port.value;
            $('message').innerHTML = "(Detected but not responding";

    }}
    
    for( var port = midi_outputs.next(); !port.done; port = midi_outputs.next())
    {
        debug( "MIDI Port: Manufacturer='" + port.value.manufacturer +
               "' Name='" + port.value.name +
               "' Type='" + port.value.type +
               "' State='" + port.value.state +
               "' Conn='" + port.value.connection );

        if( port.value.manufacturer.includes("Blooper") || port.value.name.includes("Blooper") ) {
            _midi_output_port = port.value;
            $('message').innerHTML = "(Detected but not responding)";
    }}
    if (_midi_output_port) {
    _midi_output_port.send( _prop_to_midi( [0x0001,0,0,0,0,0] ));
    }
}

function array_to_ui1  ( a ) { return a[0]; }
function array_to_ui2be( a ) { return a[1]+256*a[0]; }
function array_to_ui2le( a ) { return a[0]+256*a[1]; }
function array_to_ui4be( a ) { return 16777216*a[0]+65536*a[1]+256*a[2]+a[3]; }
function array_to_ui4le( a ) { return a[0]+256*a[1]+65536*a[2]+16777216*a[3]; }

function ui1_to_array  ( a, i, x ) { a[i] = x; }
function ui2be_to_array( a, i, x ) { a[i+0] = x/256; a[i+1] = x & 255; }
function ui2le_to_array( a, i, x ) { a[i+1] = x/256; a[i+0] = x & 255; }
function ui4be_to_array( a, i, x ) { a[i+0] = x/16777216; a[i+1] = (x/65536) & 255; a[i+2] = (x/256) & 255; a[i+3] = x & 255; }
function ui4le_to_array( a, i, x ) { a[i+0] = x & 255; a[i+1] = (x/256) & 255; a[i+2] = (x/65536) & 255; a[i+3] = x/16777216; }

function reload_page()
{
    //location.reload();
    //$('update').innerHTML = "Update";
    //$('dnload'+_wave_dnload_session).innerHTML = "Download";
    //$('save').innerHTML = "";
    _ready = false;;
}

function load_page()
{
	$('update').onclick = _update_firmware;
    $('update').disabled = false;

    for( var session = 1; session <= 16; ++session )
    {
        var count = _session_counts[session-1];
        var time = _session_times[session-1];

        if( count == 0 ) time = 0;

        $('session_'+session).innerHTML = "Session " + session;
        $('length_'+session).innerHTML = (time/100.0).toFixed(1);

        for( var track = 1; track <= count; ++track ) {
            $("dnload_"+session+"_"+track).innerHTML = "Layer " + track;
            $("dnload_"+session+"_"+track).onclick = _dnload_wavefile;
            $("dnload_"+session+"_"+track).disabled = false;
        }
    }
    for( var ii = 1; ii <= 6; ++ii ) $('bankA'+ii).style.color = '#000';
    for( var ii = 1; ii <= 6; ++ii ) $('bankB'+ii).style.color = '#000';

    for( var ii = 1; ii <= 6; ++ii ) $('bankA'+ii).disabled = false;
    for( var ii = 1; ii <= 6; ++ii ) $('bankB'+ii).disabled = false;

    for( var ii = 1; ii <= 6; ++ii ) $('bankA'+ii).onchange = _update_modifiers;
    for( var ii = 1; ii <= 6; ++ii ) $('bankB'+ii).onchange = _update_modifiers;

    for( var ii = 1; ii <= 6; ++ii ) {
        for( var jj = 1; jj <= 6; ++jj ) {
            if( ($('bankA'+ii).value == 2 && $('bankB'+jj).value ==  9) ||
                ($('bankA'+ii).value == 2 && $('bankB'+jj).value == 10) ||
                ($('bankB'+jj).value == 2 && $('bankA'+ii).value ==  9) ||
                ($('bankB'+jj).value == 2 && $('bankA'+ii).value == 10) ) {
                $('bankA'+ii).style.color = '#f00';
                $('bankB'+jj).style.color = '#f00';
            }
        }
    }
    _ready = true;

    _discover_session = 0;
    
    _session_times = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
    _session_counts = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
    
    _dfu_dnload_count = _dfu_dnload_data = _dfu_dnload_size = 0;
    
    _wave_dnload_session = _wave_dnload_track = 0;
    _wave_dnload_data = []; _wave_dnload_length = _wave_dnload_offset = 0;
    _wave_upload_data = []; _wave_upload_count = _wave_upload_size = 0;
}

function _on_midi_message( event )
{
    //console.log(event.data);

    var property = _midi_to_prop( event.data );
    if( property[0] == 0 ) return;
 	var opcode = property[0] & 0xFFFF;
    
    //console.log(property[0]);
    //console.log(property[0],property[1].toString(16),property[2].toString(16),property[3].toString(16),property[4].toString(16),property[5].toString(16));
    
    // 0x0001 - Identify the device, should be ID (3DEGFLEX) and version numbers
    
    if( opcode == 8 )
    {
        var session = property[1], size = property[2], tracks = property[3];

        //console.log( session, size, tracks );
        if( session > 0 ) {
            if( size > 0 ) {
                _session_times[session-1] = size;
                _session_counts[session-1] = tracks;
            }
        }
        if( ++_discover_session <= 16 ) {
            _midi_output_port.send( _prop_to_midi( [8,_discover_session,0,0,0,0] ));
        }
        else {
            _midi_output_port.send( _prop_to_midi( [9,0,0,0,0,0] ));
        }
    }
    if( opcode == 9 )
    {                
        _midi_output_port.send( _prop_to_midi( [10,0,0,0,0,0] ));        
    }
    if( opcode == 10 ) // Read Modifiers
    {
        $('bankA1').value = (property[1] >>  0) & 15;
        $('bankA2').value = (property[1] >>  4) & 15;
        $('bankA3').value = (property[1] >>  8) & 15;
        $('bankA4').value = (property[1] >> 12) & 15;
        $('bankA5').value = (property[1] >> 16) & 15;
        $('bankA6').value = (property[1] >> 20) & 15;

        $('bankB1').value = (property[2] >>  0) & 15;
        $('bankB2').value = (property[2] >>  4) & 15;
        $('bankB3').value = (property[2] >>  8) & 15;
        $('bankB4').value = (property[2] >> 12) & 15;
        $('bankB5').value = (property[2] >> 16) & 15;
        $('bankB6').value = (property[2] >> 20) & 15;

        $('message').innerHTML = "(Ready)";
        load_page();
    }
    if( opcode == 1 )
    {
        _ready = false;;

        _midi_output_port.send( _prop_to_midi( [8,_discover_session=1,0,0,0,0] ));
		
		//$('upload_wavefile_button').onclick = function(ee) { $('upload_wavefile_input').click(); };
		//$('upload_wavefile_input').oninput = _upload_wavefile;
    }
    
    // 0x0002 - Begin firmware upgrade, echoed back to host
    // 0x0003 - Next 20 bytes of firmware image data, echoed
    // 0x0004 - End firmware upgrade and reset (no USB property echo!)
    
    else if( opcode == 2 || opcode == 3 )
    {
		if( _dfu_dnload_data.length > 0 )
		{
			var property = [3,0,0,0,0,0];
			
			property[1] = array_to_ui4be( _dfu_dnload_data );
			_dfu_dnload_data = _dfu_dnload_data.slice(4);
			property[2] = array_to_ui4be( _dfu_dnload_data );
			_dfu_dnload_data = _dfu_dnload_data.slice(4);
			property[3] = array_to_ui4be( _dfu_dnload_data );
			_dfu_dnload_data = _dfu_dnload_data.slice(4);
			property[4] = array_to_ui4be( _dfu_dnload_data );
			_dfu_dnload_data = _dfu_dnload_data.slice(4);
			
			_midi_output_port.send( _prop_to_midi( property ));
			
			if( _dfu_dnload_count == 0 || (_dfu_dnload_count % 16) == 0 )
			{
				progress = (1600.0 * _dfu_dnload_count) / _dfu_dnload_size;
				if( progress > 99 ) progress = 99;
				$('update').innerHTML = progress.toPrecision(2) + "\%";				
			}
			_dfu_dnload_count += 1;
		}
		else
		{
            _on_midi_connect_done = 0;
			var property = [4,0,0,0,0,0];
			_midi_output_port.send( _prop_to_midi( property ));
			$('update').innerHTML = "Finished";
			setTimeout( reload_page, 1000 );
		}
	}

    // 0x0005/6/7 - Wavefile download

    else if( opcode == 5 || opcode == 6 || opcode == 7 )
    {        
        if( opcode == 5 && _wave_dnload_data.length == 0 )
        {
            _wave_dnload_data = [];
            _wave_dnload_length = property[1];
                        
            if( _wave_dnload_length > 0 ) // Length
            {
                $('dnload_'+_wave_dnload_session+"_"+_wave_dnload_track).innerHTML = ". . .";
                _midi_output_port.send( _prop_to_midi( [6,_wave_dnload_track,0,0,0,0] ));
            }
            else
            {
                $('dnload_'+_wave_dnload_session+"_"+_wave_dnload_track.innerHTML) = "Done";
    			setTimeout( reload_page, 1000 );
            }
        }
        if( opcode == 6 )
        {
            for( var ii = 0; ii < 32 && _wave_dnload_offset < _wave_dnload_length; ++ii )
            {
                _wave_dnload_data.push( property[1+ii] );
                _wave_dnload_offset++;
            }        
            progress = 100 * _wave_dnload_offset / _wave_dnload_length;
            if( progress > 99 ) progress = 99;
            $('dnload_'+_wave_dnload_session+"_"+_wave_dnload_track).innerHTML = progress.toPrecision(2) + "\%";				

            if( _wave_dnload_offset < _wave_dnload_length ) {
                _midi_output_port.send( _prop_to_midi( [6,_wave_dnload_track,0,0,0,0] ));
            }
            else {
                _midi_output_port.send( _prop_to_midi( [7,0,0,0,0,0] ));
            }
        }
        if( opcode == 7 )
        {
            $('dnload_'+_wave_dnload_session+"_"+_wave_dnload_track).innerHTML = "Done";
            
            var wavefile = samples_to_wave( _wave_dnload_data );
        
            var a = document.createElement("a");
            document.body.appendChild(a);
            a.style = "display: none";

            blob = new Blob( [wavefile], {type: "octet/stream"} );

            url = window.URL.createObjectURL(blob);
            a.href = url;
            a.download = 'blooper.'+_wave_dnload_session+"."+_wave_dnload_track+'.wav';
            a.click();
            window.URL.revokeObjectURL(url);

            _wave_dnload_data = [];
			//setTimeout( reload_page, 1000 );

            _midi_output_port.send( _prop_to_midi( [1,0,0,0,0,0] ));
        }
    }

    // 0x0007 - Begin wavefile download, echoed back to host
    // 0x0008 - Next 20 bytes of wave audio data, echoed
    // 0x0009 - End download

    else if( opcode == 0x0008 || opcode == 0x0009 || opcode == 0x000A )
    {
		/*
		if( _wave_upload_data.length > 0 )
		{
			var property = [0x0007,0,0,0,0,0];
			
			property[1] = array_to_ui4be( _wave_upload_data );
			_wave_upload_data = _wave_upload_data.slice(4);
			property[2] = array_to_ui4be( _wave_upload_data );
			_wave_upload_data = _wave_upload_data.slice(4);
			property[3] = array_to_ui4be( _wave_upload_data );
			_wave_upload_data = _wave_upload_data.slice(4);
			property[4] = array_to_ui4be( _wave_upload_data );
			_wave_upload_data = _wave_upload_data.slice(4);
			
			_midi_output_port.send( _prop_to_midi( property ));
			
			if( _wave_upload_count == 0 || (_wave_upload_count % 16) == 0 )
			{
				progress = (1600.0 * _wave_dnload_count) / _wave_upload_size;
				if( progress > 99 ) progress = 99;
				$('upload_wavefile_button').innerHTML = progress.toPrecision(2) + "\%";				
			}
			_wave_upload_count += 1;
		}
		else
		{
			var property = [0x0009,0,0,0,0,0];
			_midi_output_port.send( _prop_to_midi( property ));
			$('upload_wavefile_button').innerHTML = "Finished";
		}
		*/
    }
}

function _update_firmware( event )
{
    if( !_ready ) return;
    _ready = false;;
    
    $('update').innerHTML = ". . .";
    data = new Uint8Array( _image.length );

    for( var ii = 0; ii < _image.length; ++ii ) data[ii] = _image.charCodeAt(ii);

    _dfu_dnload_count = 0;
    _dfu_dnload_data = data;
    _dfu_dnload_size = data.length;

    _midi_output_port.send( _prop_to_midi( [2,0,0,0,0,0] ));
}

function _dnload_wavefile( object )
{
    if( !_ready ) return;
    _ready = false;;
    
    var ss = 0, tt = 0;
    id = object.target.id;
    if( id.charAt(8) == '_' ) { ss = id.slice(7,8); tt = id.slice(9); }
    if( id.charAt(9) == '_' ) { ss = id.slice(7,9); tt = id.slice(10); }
    
    console.log( object.target.id );
    _wave_dnload_session = parseInt( ss );
    _wave_dnload_track = parseInt( tt );
    
    _midi_output_port.send( _prop_to_midi( [5,_wave_dnload_session,_wave_dnload_track,0,0,0] ));
}

function _upload_wavefile( object )
{
    if( !_ready ) return;
    $('upload_wavefile_button').innerHTML = ". . .";

    var reader = new FileReader();
    reader.onload = function(ee)
    {
        data = new Uint8Array( ee.target.result );
        
        data = wave_to_samples( data );
        
        _wave_upload_count = 0;
        _wave_upload_data = data;
        _wave_upload_size = data.length;
                
        _midi_output_port.send( _prop_to_midi( [8,0,0,0,0,0] ));
    };
    reader.readAsArrayBuffer( object.target.files[0] );
}

function _update_modifiers( event )
{
    var prop = [11, ($('bankA1').value<< 0)+($('bankA2').value<< 4)+($('bankA3').value<< 8)+
                    ($('bankA4').value<<12)+($('bankA5').value<<16)+($('bankA6').value<<20),
                    ($('bankB1').value<< 0)+($('bankB2').value<< 4)+($('bankB3').value<< 8)+
                    ($('bankB4').value<<12)+($('bankB5').value<<16)+($('bankB6').value<<20), 0,0,0];
    
    _midi_output_port.send( _prop_to_midi( prop ));
}

function _prop_to_midi( property )
{
    var midi_data = [0xF0];
    for( var ii = 0; ii < 6; ++ii )
    {
        midi_data.push( (property[ii]>>28)&15 ); midi_data.push( (property[ii]>>24)&15 );
        midi_data.push( (property[ii]>>20)&15 ); midi_data.push( (property[ii]>>16)&15 );
        midi_data.push( (property[ii]>>12)&15 ); midi_data.push( (property[ii]>> 8)&15 );
        midi_data.push( (property[ii]>> 4)&15 ); midi_data.push( (property[ii]>> 0)&15 );
    }
    midi_data.push( 0xF7 );
    return midi_data;
}

function _midi_to_prop( midi_data )
{
    var property = [0,0,0,0,0,0];
        
    if( midi_data[0] == 0xF0 && midi_data[49] == 0xF7 )
    {
        var property = [0,0,0,0,0,0];
        for( var ii = 0; ii < 6; ++ii )
        {
            property[ii] = (midi_data[8*ii+1]<<28) + (midi_data[8*ii+2]<<24)
                         + (midi_data[8*ii+3]<<20) + (midi_data[8*ii+4]<<16)
                         + (midi_data[8*ii+5]<<12) + (midi_data[8*ii+6]<< 8)
                         + (midi_data[8*ii+7]<< 4) + (midi_data[8*ii+8]<< 0);
        }
        return property;
    }
    else if( midi_data[0] == 0xF0 && midi_data[265] == 0xF7 )
    {
        for( var ii = 0; ii < 1+36; ++ii )
        {
            property[ii] = (midi_data[8*ii+1]<<28) + (midi_data[8*ii+2]<<24)
                         + (midi_data[8*ii+3]<<20) + (midi_data[8*ii+4]<<16)
                         + (midi_data[8*ii+5]<<12) + (midi_data[8*ii+6]<< 8)
                         + (midi_data[8*ii+7]<< 4) + (midi_data[8*ii+8]<< 0);
        }
        return property;
    }
    
    console.log( "??? " + midi_data.length );
    return [0,0,0,0,0,0];
}

function _property_to_text( property )
{
	var text = "";
	text += String.fromCharCode( property[1]&255, (property[1]>>8)&255, (property[1]>>16)&255, property[1]>>24 );
	text += String.fromCharCode( property[2]&255, (property[2]>>8)&255, (property[2]>>16)&255, property[2]>>24 );
	text += String.fromCharCode( property[3]&255, (property[3]>>8)&255, (property[3]>>16)&255, property[3]>>24 );
	text += String.fromCharCode( property[4]&255, (property[4]>>8)&255, (property[4]>>16)&255, property[4]>>24 );
	text += String.fromCharCode( property[5]&255, (property[5]>>8)&255, (property[5]>>16)&255, property[5]>>24 );
	return text;
}

function samples_to_wave( samples )
{
    var data = new Uint8Array( 44 + 3 * samples.length );
    
    ui4le_to_array( data, 0, 0x46464952 ); // 'RIFF'    
    ui4le_to_array( data, 4, 36 + 3 * samples.length ); // Total size
    ui4le_to_array( data, 8, 0x45564157 ); // 'WAVE'    

    ui4le_to_array( data, 12, 0x20746D66 ); // 'fmt '    
    ui4le_to_array( data, 16, 16 ); // Block size
    ui2le_to_array( data, 20, 1 ); // Format
    ui2le_to_array( data, 22, 1 ); // Channels
    ui4le_to_array( data, 24, 32000 ); // Rate
    ui4le_to_array( data, 28, samples.length ); // Count
    ui2le_to_array( data, 32, 3 ); // 3 byte word alignment
    ui2le_to_array( data, 34, 24 ); // 24 bits per sample

    ui4le_to_array( data, 36, 0x61746164 ); // 'data'    
    ui4le_to_array( data, 40, 3 * samples.length ); // Block size
    
    for( var ii = 0; ii < samples.length; ++ii )
    {
        data[44+3*ii+0] = samples[ii] & 255;
        data[44+3*ii+1] = (samples[ii]/256) & 255;
        data[44+3*ii+2] = (samples[ii]/65536) & 255;
    }
    return data;
}

function wave_to_samples( data )
{
    var format, channels, rate, thruput, align, width;
    var samples = new Array();
    var rate = 0; samples = [];
    var group_id   = array_to_ui4le(data); data = data.slice(4); // Signature for 'RIFF'
    var total_size = array_to_ui4le(data); data = data.slice(4);
    var type_id    = array_to_ui4le(data); data = data.slice(4); // Signature for 'WAVE'
    
    console.log( group_id, total_size, type_id  );
    
    while( 1 )
    {
        if( data.length < 8 ) break;
        var blockid = array_to_ui4le(data); data = data.slice(4);
        var blocksz = array_to_ui4le(data); data = data.slice(4);

        console.log( blockid, blocksz );

        if( blockid == 0x20746D66) // Signature for 'fmt'
        {
            if( data.length < 16 ) break;
            format   = array_to_ui2le(data); data = data.slice(2);
            channels = array_to_ui2le(data); data = data.slice(2);
            rate     = array_to_ui4le(data); data = data.slice(4);
            thruput  = array_to_ui4le(data); data = data.slice(4);
            align    = array_to_ui2le(data); data = data.slice(2);
            width    = array_to_ui2le(data); data = data.slice(2);
            console.log( format, channels, rate, thruput, align, width );
            //console.log( "WaveIn: ByteCount=%u Channels=%u Rate=%u WordSize=%u", blocksz,channels,rate,width );
        }
        else if( blockid == 0x61746164 ) // Signature for 'data'
        {
            if( data.length < blocksz ) break;
            var count = blocksz / (width/8);
            if( channels == 1 ) {
                while( count-- > 0  ) {
                    if( width == 8 ) {
                        samples.push( data[0]*256*256*256 );
                        data = data.slice(1);
                    }
                    if( width == 16 ) {
                        samples.push( data[1]*256*256*256 + data[0]*256*256 );
                        data = data.slice(2);
                    }
                    if( width == 24 ) {
                        samples.push( data[2]*256*256*256 + data[1]*256*256 + data[0]*256 );
                        data = data.slice(3);
                    }
                    if( width == 32 ) {
                        samples.push( data[3]*256*256*256 + data[2]*256*256 + data[1]*256 + data[0] );
                        value += data[0];
                        data = data.slice(4);
                    }
                }
            }
        }
    }
    return samples;
}
