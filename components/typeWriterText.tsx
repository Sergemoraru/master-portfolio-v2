import React, { useEffect, useRef } from 'react';

const useTypewriterEffect = () => {
  const elementRef = useRef(null);

  useEffect(() => {
    class TxtType {
      type: any;
        toRotate: any;
        el: any;
        loopNum: number;
        period: number;
        txt: string;
        isDeleting: boolean;

      constructor(el, toRotate, period) {
        this.toRotate = toRotate;
        this.el = el;
        this.loopNum = 0;
        this.period = parseInt(period, 10) || 2000;
        this.txt = '';
        this.isDeleting = false;
        this.tick();
      }

      tick() {
        const i = this.loopNum % this.toRotate.length;
        const fullTxt = this.toRotate[i];

        if (this.isDeleting) {
          this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
          this.txt = fullTxt.substring(0, this.txt.length + 1);
        }

        this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';

        let delta = 200 - Math.random() * 100;

        if (this.isDeleting) {
          delta /= 2;
        }

        if (!this.isDeleting && this.txt === fullTxt) {
          delta = this.period;
          this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
          this.isDeleting = false;
          this.loopNum++;
          delta = 500;
        }

        this.type = setTimeout(() => {
          this.tick();
        }, delta);
      }
    }

    const initTypeWriter = () => {
      const elements = document.getElementsByClassName('typewrite');
      for (let i = 0; i < elements.length; i++) {
        const toRotate = elements[i].getAttribute('data-type');
        const period = elements[i].getAttribute('data-period');
        if (toRotate) {
          new TxtType(elements[i], JSON.parse(toRotate), period);
        }
      }
    };

    initTypeWriter();

    return () => {
      clearTimeout(this.type);
    };
  }, []);

  return elementRef;
};

const TypeWriterText = () => {
  const elementRef = useTypewriterEffect();

  return (
    <div className='text-slate-500 text-6xl antialiased font-semibold font-mono transition'>
      <h1>
        <a
          href=''
          className='typewrite'
          data-period='2000'
          data-type='["Hi, Im Sergey Moraru", "A Full Stack Developer.", "A Software Engineer.", "A Web Developer."]'
        >
          <span className='wrap transition' ref={elementRef}></span>
        </a>
      </h1>
    </div>
  );
};

export default TypeWriterText;
