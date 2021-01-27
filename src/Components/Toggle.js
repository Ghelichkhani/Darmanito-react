import React from "react";

export default function Toggle({ classes }) {
  return (
    <nav className={`custom-top-nav text-right  ${ classes ? classes : null } `}>
      <ul>
        <li>
          <a href="">صفحه اصلی</a>
        </li>
        <li>
          <a href="">درباره ما</a>
        </li>
        <li>
          <a href="">تماس باما</a>
        </li>
        <li>
          <a href="">سوالات متداول</a>
        </li>
        <li>
          <a href="">عضویت داروخانه ها</a>
        </li>
        <li>
          <button className="btn btn-blue mt-2 d-lg-none">
            دانلود درمانیتو
          </button>
        </li>
      </ul>
    </nav>
  );
}
