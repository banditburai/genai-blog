
  import * as Sentry from "@sentry/astro";

Sentry.init({
  dsn: "https://ae18d6deff77e66b880cbf009a4d015e@o4506305828290560.ingest.sentry.io/4506396468641792",

  integrations: [
    new Sentry.Feedback({
      buttonLabel: "",
      colorScheme: "light",
    }),
  ],
});