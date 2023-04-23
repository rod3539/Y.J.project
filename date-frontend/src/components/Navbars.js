import React from 'react';
import styles from './Navbars.module.css';

function Navbars(props) {
  return (
    <div className={styles.navbar}>
        <div className={styles.navbar_search}>
          {/* <input className={styles.navbar_searchInput} type="text" />
        <SearchIcon className={styles.navbar_searchIcon} fontSize="large" />  */}
          <a href="/searchpage">
            <p>Search</p>
          </a>
          <a href="/modeling">
            <p>3DInterior</p>
          </a>
          <a href="/ai">
            <p>AI assistance</p>
          </a>
        </div>
    </div>
  );
}

export default Navbars;