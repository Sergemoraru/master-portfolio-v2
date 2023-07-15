import React, { useEffect } from 'react';

const useTypewriterEffect = () => {
  useEffect(() => {
    const TxtType = function (el: Element, toRotate: any, period: string) {
       this.toRotate = toRotate;
      this.el = el;
      this.loopNum = 0;
      this.period = parseInt(period, 10) || 2000;
      this.txt = '';
      this.tick();
      this.isDeleting = false;
    };

    TxtType.prototype.tick = function () {
      const i = this.loopNum % this.toRotate.length;
      const fullTxt = this.toRotate[i];

      if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
      } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
      }

      this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';

      const that = this;
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

      setTimeout(function () {
        that.tick();
      }, delta);
    };

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
      const elements = document.getElementsByClassName('typewrite');
      for (let i = 0; i < elements.length; i++) {
        elements[i].innerHTML = '';
      }
    };
  }, []);
};

const TypeWriterText = () => {
  useTypewriterEffect();

  return (
    <div className='text-slate-500 text-6xl antialiased font-semibold font-mono'>
      <h1>
        <a
          href=""
          className="typewrite"
          data-period="2000"
          data-type='["Hi, Im Sergey Moraru", "A Full Stack Developer.", "A Software Engineer.", "A Web Developer."]'
        >
          <span className="wrap"></span>
        </a>
      </h1>
    </div>
  );
};

export default TypeWriterText;