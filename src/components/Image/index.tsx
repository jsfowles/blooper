import React from 'react';
import useMotionTrigger from '@hooks/useMotionTrigger';
import { observerThreshold } from '@identity/motion';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';

interface Props {
  src?: string;
  alt?: string;
  [key: string]: any;
}

const Img = ({
  url,
  height = '100%',
  width = '100%',
  alt,
  hasShadow,
  ...props
}: Props) => {
  const [ref, animate] = useMotionTrigger({
    threshold: observerThreshold.XS,
    triggerOnce: true,
  });
  const { pathname } = useRouter();
  const isModifiers = pathname === '/modifiers';

  if (!url) {
    return null;
  }

  return (
    <motion.figure
      style={{
        position: 'relative',

        justifyContent: 'center',
        alignItems: 'center',
        width: width,
        maxWidth: isModifiers ? 500 : 300,
        height: isModifiers ? 700 : 'initial',
        maxHeight: height,
        borderRadius: hasShadow && 25,
        boxShadow: hasShadow && 'rgba(0, 0, 0, 0.3) 0px 0px 10px',
      }}
      ref={ref}
      initial={{ opacity: 0 }}
      animate={animate ? { opacity: 1 } : { opacity: 0 }}
    >
      {isModifiers ? (
        <Image
          layout="fill"
          objectFit="contain"
          {...props}
          src={url}
          alt={alt}
        />
      ) : (
        <Image
          className="next-image"
          layout="responsive"
          width={width}
          height={height}
          {...props}
          src={url}
          alt={alt}
        />
      )}
    </motion.figure>
  );
};

export default Img;
