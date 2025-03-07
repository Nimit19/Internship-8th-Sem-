import React, { Suspense } from "react";
import Link from "next/link";
import MealsGrid from "@/components/meals/meals-grid";

import classes from "./page.module.css";
import { getMeals } from "@/lib/meals";

const Meals = async () => {
  const meals = await getMeals();
  return <MealsGrid meals={meals} />;
};

const MealsPage = () => {
  return (
    <>
      <header className={classes.header}>
        <h1>
          Delicious meals, created{" "}
          <span className={classes.highlight}>by you </span>
        </h1>
        <p>Choose your favorite recipe & cook it yourself. It easy and fun!</p>
        <p className={classes.cta}>
          <Link href="/meals/share">Share your favorite recipe</Link>
        </p>
      </header>
      <main className={classes.main}>
        <Suspense
          fallback={<p className={classes.loading}>Fetching meals...</p>}
        >
          <Meals />
        </Suspense>
      </main>
    </>
  );
};

export default MealsPage;
