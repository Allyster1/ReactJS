import styles from "./StyledComponent.module.css";

export default function StyledComponent() {
   return (
      <section>
         <h2>Styled Component</h2>

         <p className={styles["fancy-text"]}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, tempore quos quidem ipsum tempora
            culpa! Ab illo architecto voluptate laboriosam!
         </p>
      </section>
   );
}
