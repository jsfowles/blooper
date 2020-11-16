import React from 'react';
import { Scribbles, Content } from './styles';
import Image from '@components/Image';
import { motion } from 'framer-motion';
import { DATA_BLOCKS } from '@views/Home/data';
import Block from '@components/Block';

const Home = () => {
  const [offset, setOffset] = React.useState(0);

  React.useEffect(() => {
    function handleScroll() {
      setOffset(window.pageYOffset);
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [offset]);

  return (
    <div>
      <Scribbles>
        <Content>
          <Image src="/images/blooper-front.png" />
          <motion.h1>blooper</motion.h1>
          <div style={{ position: 'relative' }}>
            <motion.p>
              this is a website to help you enjoy a rich, reqarding time with
              your blooper. it does a lot and it can get pretty weird. so, get
              familiar with its many tricks, or use the interface to update,
              download , and customize.
            </motion.p>
            <Image
              src="/images/s1.png"
              className="s1"
              transition={{ type: 'spring', stiffness: 60 }}
              animate={{
                y: offset * 0.5,
                rotate: offset * 0.1,
              }}
            />
            <Image
              src="/images/s3.png"
              className="s3"
              transition={{ type: 'spring', stiffness: 60 }}
              animate={{
                y: -offset * 0.2,
                rotate: -offset * 0.3,
              }}
            />
          </div>
        </Content>
        <Image
          src="/images/s7.png"
          className="s7"
          transition={{ type: 'spring', stiffness: 60 }}
          animate={{
            y: -offset * 0.3,
            rotate: offset * 0.08,
          }}
        />
        <Image
          src="/images/s10.png"
          className="s10"
          transition={{ type: 'spring', stiffness: 60 }}
          animate={{
            y: offset * 0.3,
            rotate: -offset * 0.05,
          }}
        />
        <Image
          src="/images/s5.png"
          className="s5"
          transition={{ type: 'spring', stiffness: 60 }}
          animate={{
            y: offset * 0.9,
            rotate: -offset * 0.1,
          }}
        />
      </Scribbles>

      {DATA_BLOCKS.map(block => (
        <Block {...block} />
      ))}
    </div>
  );
};

export default Home;
