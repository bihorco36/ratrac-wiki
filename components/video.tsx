// Example from https://beta.reactjs.org/learn

import styles from "./video.module.css";

export default function Video(props: any) {
  return (
    <div className={styles.videoWrapper}>
      <iframe
        src={props.link}
        title="Video player"
        allow="autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"
      ></iframe>
    </div>
  );
}
