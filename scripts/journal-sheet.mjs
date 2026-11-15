// scripts/journal-sheet.mjs

Hooks.once('init', () => {
  console.log('Античный журнал | Регистрация листа...');

  // Наследуемся от НОВОГО класса JournalEntrySheet (v13)
  class AntiqueJournalSheet extends foundry.applications.sheets.journal.JournalEntrySheet {
    /** @override */
    static DEFAULT_OPTIONS = {
      classes: ["antiquejournal"] // Добавляем наш CSS-класс
    };

    /** @override */
    static PARTS = {
      // Копируем структуру из базового класса, чтобы сохранить боковую панель
      sidebar: {
        template: "templates/journal/sidebar.hbs",
        scrollable: [".directory-list"]
      },
      pages: {
        template: "templates/journal/pages.hbs",
        scrollable: [".journal-page-content"]
      }
    };

    /** @override */
    static get label() {
      return "Античный свиток";
    }
  }

  // Регистрируем лист
  foundry.applications.apps.DocumentSheetConfig.registerSheet(
    foundry.documents.JournalEntry,
    "unst-odyssey-of-the-dragonlords",
    AntiqueJournalSheet,
    {
      types: ["base"],
      makeDefault: false,
      label: "Античный свиток"
    }
  );
});