function StaticHeroBackdrop() {
  return (
    <div
      aria-hidden="true"
      className="absolute inset-0 -z-10 bg-linear-to-br dark:from-primary/90 dark:to-background"
    />
  );
}

export default StaticHeroBackdrop;
