'use client';

import Image from "next/image";
import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import {
  FaUser,
  FaCertificate,
  FaEnvelope,
  FaGithub,
  FaGitlab,
  FaLinkedinIn,
  FaStackOverflow,
  FaSun,
  FaMoon,
} from 'react-icons/fa';

export default function Navbar() {
  const navRef = useRef<HTMLDivElement>(null);

  // MODE
  const [isDark, setIsDark] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const iconRef = useRef<HTMLElement>(null);

  const toggleTheme = () => {
    setIsLoading(true);

    setTimeout(() => {
      const nextDark = !isDark;
      setIsDark(nextDark);
      document.body.classList.toggle('dark-mode', nextDark);
      localStorage.setItem("modeByThean", nextDark ? "dark" : "light");
      setIsLoading(false);
    }, 600);
  };


  useEffect(() => {
    const saved = localStorage.getItem("modeByThean");
    const dark = saved === "dark";

    setIsDark(dark);
    document.body.classList.toggle('dark-mode', dark);

    const nav = navRef.current;
    if (!nav) return;

    const items = nav.querySelectorAll('.nav-item a');

    const mouseEvents: { item: Element; enter: () => void; leave: () => void }[] = [];

    items.forEach((item) => {
      const enter = () => item.classList.add('hovered');
      const leave = () => item.classList.remove('hovered');

      item.addEventListener('mouseenter', enter);
      item.addEventListener('mouseleave', leave);

      mouseEvents.push({ item, enter, leave });
    });

    let lastScrollTop = 0;

    const handleScroll = () => {
      if (!navRef.current) return;

      const currentScrollTop = window.scrollY;

      if (currentScrollTop > 0) {
        navRef.current.classList.add('h-shadow');
      } else {
        navRef.current.classList.remove('h-shadow');
      }

      if (currentScrollTop > lastScrollTop) {
        navRef.current.classList.add('hidden');
      } else {
        navRef.current.classList.remove('hidden');
      }

      lastScrollTop = Math.max(currentScrollTop, 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);

      mouseEvents.forEach(({ item, enter, leave }) => {
        item.removeEventListener('mouseenter', enter);
        item.removeEventListener('mouseleave', leave);
      });
    };
  }, []);



  return (
    <div className="menu">
      <div className="bottom-nav-wrapper">
        <div className="bottom-nav" id="bottomNav" ref={navRef}>
          {/* 👤 Cá nhân */}
          <div className="nav-item">
            <span>Home</span>
            <Link href="/"><FaUser /></Link>
          </div>

          <div className="nav-item">
            <span>Projects</span>
            <Link href="#">
              <svg xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink" width="15px" zoomAndPan="magnify" viewBox="0 0 624 558.75"
                height="15px" preserveAspectRatio="xMidYMid meet" version="1.0">
                <defs>
                  <clipPath id="591cbcd4e8">
                    <path d="M 3 0 L 418.453125 0 L 418.453125 554 L 3 554 Z M 3 0 " clipRule="nonzero" />
                  </clipPath>
                  <clipPath id="7ca37adbd4">
                    <path d="M 216 473.140625 L 622 473.140625 L 622 557 L 216 557 Z M 216 473.140625 "
                      clipRule="nonzero" />
                  </clipPath>
                </defs>
                <g clipPath="url(#591cbcd4e8)">
                  <path fill="#9a9a9a"
                    d="M 48.726562 0.40625 C 51.296875 0.316406 53.855469 0.441406 56.40625 0.785156 C 58.953125 1.125 61.457031 1.675781 63.914062 2.433594 C 66.371094 3.195312 68.746094 4.15625 71.042969 5.3125 C 73.335938 6.472656 75.519531 7.816406 77.589844 9.339844 L 399.371094 239.183594 C 400.109375 239.710938 400.835938 240.261719 401.542969 240.835938 C 402.25 241.40625 402.9375 242 403.613281 242.613281 C 404.285156 243.226562 404.9375 243.859375 405.570312 244.511719 C 406.207031 245.164062 406.820312 245.835938 407.417969 246.523438 C 408.011719 247.210938 408.585938 247.917969 409.140625 248.640625 C 409.691406 249.363281 410.222656 250.101562 410.730469 250.855469 C 411.242188 251.609375 411.726562 252.378906 412.191406 253.164062 C 412.65625 253.945312 413.09375 254.742188 413.511719 255.550781 C 413.925781 256.363281 414.320312 257.183594 414.6875 258.015625 C 415.054688 258.847656 415.394531 259.691406 415.714844 260.542969 C 416.03125 261.398438 416.324219 262.257812 416.589844 263.128906 C 416.855469 264 417.09375 264.875 417.308594 265.761719 C 417.523438 266.644531 417.710938 267.535156 417.871094 268.429688 C 418.035156 269.328125 418.167969 270.226562 418.277344 271.128906 C 418.382812 272.035156 418.464844 272.941406 418.519531 273.847656 C 418.574219 274.757812 418.601562 275.667969 418.601562 276.578125 C 418.601562 277.488281 418.574219 278.394531 418.519531 279.304688 C 418.464844 280.214844 418.382812 281.121094 418.277344 282.023438 C 418.167969 282.925781 418.035156 283.828125 417.871094 284.722656 C 417.710938 285.617188 417.523438 286.507812 417.308594 287.394531 C 417.09375 288.277344 416.855469 289.15625 416.589844 290.023438 C 416.324219 290.894531 416.03125 291.757812 415.714844 292.609375 C 415.394531 293.464844 415.054688 294.304688 414.6875 295.136719 C 414.320312 295.972656 413.925781 296.792969 413.511719 297.601562 C 413.09375 298.410156 412.65625 299.207031 412.191406 299.988281 C 411.726562 300.773438 411.242188 301.542969 410.730469 302.296875 C 410.222656 303.050781 409.691406 303.789062 409.140625 304.511719 C 408.585938 305.234375 408.011719 305.941406 407.417969 306.628906 C 406.820312 307.320312 406.207031 307.988281 405.570312 308.640625 C 404.9375 309.292969 404.285156 309.925781 403.613281 310.539062 C 402.9375 311.152344 402.25 311.746094 401.542969 312.316406 C 400.835938 312.890625 400.109375 313.441406 399.371094 313.972656 L 77.589844 543.8125 C 76.371094 544.738281 75.105469 545.605469 73.796875 546.402344 C 72.488281 547.203125 71.144531 547.9375 69.761719 548.601562 C 68.382812 549.269531 66.96875 549.863281 65.53125 550.386719 C 64.089844 550.914062 62.625 551.363281 61.140625 551.742188 C 59.652344 552.121094 58.152344 552.421875 56.636719 552.652344 C 55.121094 552.878906 53.59375 553.03125 52.0625 553.105469 C 50.53125 553.183594 49 553.179688 47.46875 553.101562 C 45.9375 553.023438 44.414062 552.871094 42.898438 552.640625 C 41.382812 552.410156 39.882812 552.105469 38.398438 551.726562 C 36.910156 551.34375 35.449219 550.890625 34.007812 550.363281 C 32.570312 549.835938 31.160156 549.238281 29.777344 548.570312 C 28.398438 547.902344 27.054688 547.167969 25.746094 546.367188 C 24.441406 545.566406 23.175781 544.699219 21.957031 543.769531 C 20.738281 542.839844 19.566406 541.855469 18.445312 540.808594 C 17.324219 539.761719 16.257812 538.664062 15.246094 537.511719 C 14.234375 536.359375 13.285156 535.160156 12.390625 533.910156 C 11.5 532.664062 10.675781 531.375 9.914062 530.042969 C 9.148438 528.710938 8.457031 527.347656 7.832031 525.949219 C 7.203125 524.546875 6.652344 523.121094 6.167969 521.664062 C 5.683594 520.210938 5.277344 518.734375 4.941406 517.238281 C 4.605469 515.742188 4.347656 514.230469 4.160156 512.710938 C 3.976562 511.1875 3.871094 509.660156 3.839844 508.125 C 3.808594 506.59375 3.851562 505.0625 3.976562 503.535156 C 4.097656 502.003906 4.292969 500.488281 4.570312 498.976562 C 4.84375 497.46875 5.191406 495.976562 5.613281 494.503906 C 6.035156 493.03125 6.53125 491.582031 7.101562 490.15625 C 7.667969 488.734375 8.304688 487.339844 9.015625 485.980469 C 9.722656 484.621094 10.496094 483.296875 11.335938 482.015625 C 12.171875 480.730469 13.074219 479.496094 14.039062 478.300781 C 15.003906 477.109375 16.023438 475.96875 17.101562 474.875 C 18.179688 473.785156 19.308594 472.75 20.488281 471.773438 C 21.671875 470.796875 22.898438 469.878906 24.171875 469.023438 L 293.605469 276.578125 L 24.171875 84.128906 C 23.1875 83.445312 22.230469 82.726562 21.300781 81.96875 C 20.375 81.210938 19.476562 80.421875 18.613281 79.59375 C 17.746094 78.765625 16.914062 77.90625 16.113281 77.011719 C 15.316406 76.121094 14.554688 75.199219 13.828125 74.246094 C 13.101562 73.296875 12.410156 72.316406 11.761719 71.3125 C 11.109375 70.304688 10.5 69.273438 9.929688 68.222656 C 9.363281 67.167969 8.832031 66.09375 8.347656 65 C 7.863281 63.90625 7.417969 62.792969 7.019531 61.664062 C 6.621094 60.535156 6.265625 59.390625 5.957031 58.234375 C 5.648438 57.078125 5.382812 55.910156 5.164062 54.734375 C 4.949219 53.554688 4.777344 52.371094 4.648438 51.179688 C 4.523438 49.988281 4.445312 48.796875 4.414062 47.597656 C 4.378906 46.402344 4.394531 45.203125 4.453125 44.007812 C 4.515625 42.8125 4.625 41.621094 4.777344 40.433594 C 4.933594 39.246094 5.132812 38.066406 5.378906 36.894531 C 5.625 35.722656 5.917969 34.5625 6.253906 33.410156 C 6.589844 32.261719 6.972656 31.128906 7.398438 30.007812 C 7.824219 28.890625 8.292969 27.789062 8.804688 26.707031 C 9.316406 25.625 9.867188 24.5625 10.464844 23.523438 C 11.058594 22.484375 11.691406 21.46875 12.367188 20.476562 C 13.039062 19.488281 13.753906 18.527344 14.5 17.59375 C 15.25 16.65625 16.035156 15.753906 16.855469 14.878906 C 17.675781 14.007812 18.527344 13.167969 19.414062 12.363281 C 20.296875 11.554688 21.214844 10.785156 22.160156 10.050781 C 23.105469 9.316406 24.078125 8.617188 25.078125 7.960938 C 26.078125 7.300781 27.101562 6.683594 28.152344 6.101562 C 29.199219 5.523438 30.269531 4.988281 31.359375 4.492188 C 32.449219 3.996094 33.558594 3.542969 34.683594 3.136719 C 35.808594 2.726562 36.949219 2.363281 38.101562 2.042969 C 39.257812 1.722656 40.421875 1.449219 41.597656 1.222656 C 42.773438 0.992188 43.957031 0.8125 45.144531 0.675781 C 46.335938 0.539062 47.527344 0.449219 48.726562 0.40625 Z M 48.726562 0.40625 "
                    fillOpacity="1" fillRule="nonzero" />
                </g>
                <g clipPath="url(#7ca37adbd4)">
                  <path fill="#9a9a9a" className="blinking"
                    d="M 251.214844 473.773438 C 254.769531 473.324219 258.273438 473.175781 261.722656 473.332031 C 261.882812 473.335938 262.042969 473.34375 262.203125 473.355469 C 269.300781 473.761719 275.609375 474.019531 281.125 474.136719 L 281.117188 474.136719 C 293.007812 474.382812 306.34375 474.570312 321.125 474.695312 L 320.921875 474.695312 C 362.683594 474.832031 409.789062 474.90625 462.242188 474.921875 L 462.347656 474.921875 C 475.863281 474.964844 488.503906 475.066406 500.269531 475.234375 L 500.273438 475.234375 C 539.378906 475.785156 567.570312 476.703125 584.839844 477.988281 C 606.484375 479.597656 622.726562 498.449219 621.117188 520.09375 C 619.507812 541.738281 600.65625 557.980469 579.011719 556.371094 C 563.3125 555.207031 536.695312 554.355469 499.164062 553.828125 L 499.167969 553.828125 C 487.683594 553.664062 475.332031 553.566406 462.109375 553.523438 L 462.21875 553.523438 C 409.675781 553.507812 362.492188 553.429688 320.664062 553.292969 C 320.597656 553.292969 320.527344 553.292969 320.460938 553.292969 C 305.363281 553.164062 291.703125 552.976562 279.484375 552.722656 L 279.476562 552.722656 C 273.011719 552.585938 265.761719 552.289062 257.71875 551.828125 L 258.199219 551.851562 C 259.230469 551.898438 260.1875 551.863281 261.082031 551.753906 C 239.546875 554.476562 219.882812 539.230469 217.15625 517.695312 C 214.433594 496.160156 229.683594 476.496094 251.214844 473.773438 Z M 251.214844 473.773438 "
                    fillOpacity="1" fillRule="nonzero" />
                </g>
              </svg>
            </Link>
          </div>

          <div className="nav-item">
            <span>Cert</span>
            <Link href="/cert"><FaCertificate /></Link>
          </div>

          {/* 
          <div className="nav-item">
            <Link href="#"><FaEnvelope /></Link>
          </div>

          🌐 Social Dev
          <div className="nav-item">
            <a href="https://github.com/" target="_blank" rel="noreferrer">
              <FaGithub />
            </a>
          </div>
          <div className="nav-item">
            <a href="https://gitlab.com/" target="_blank" rel="noreferrer">
              <FaGitlab />
            </a>
          </div>
          <div className="nav-item">
            <a href="https://linkedin.com/" target="_blank" rel="noreferrer">
              <FaLinkedinIn />
            </a>
          </div>
          <div className="nav-item">
            <a href="https://stackoverflow.com/" target="_blank" rel="noreferrer">
              <FaStackOverflow />
            </a>
          </div> */}

          {/* 🌙 Theme toggle */}
          <div className="nav-item">
            <a onClick={toggleTheme} style={{ cursor: 'pointer' }}>
              {/* {isDark ? <FaMoon /> : <FaSun />} */}
              <i
                className={`fa-solid sun-moon ${isLoading ? 'fa-spinner fa-spin' : isDark ? 'fa-moon' : 'fa-sun'
                  }`}
              ></i>
            </a>
          </div>

          {/* <div className="nav-item">
            <a>
              <i className="fa-solid fa-sun sun-moon" onclick="changesIcon(this)"> </i>
              <div className="spinner" style={{ display: none; }}></div>
            </a>
          </div> */}
        </div>
      </div>
    </div>
  );
}
