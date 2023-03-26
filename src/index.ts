import type { Prompt } from "./types";

export class Promptitude {
  private promptsByCategory: Map<string, Prompt[]>;
  private promptsByTag: Map<string, Prompt[]>;
  private promptsByLanguage: Map<string, Prompt[]>;
  private readonly allPrompts: Prompt[];

  constructor(prompts: Prompt[]) {
    this.promptsByCategory = new Map();
    this.promptsByTag = new Map();
    this.promptsByLanguage = new Map();
    this.allPrompts = prompts;

    // 根据不同条件将提示存储到 Map 中
    for (const prompt of prompts) {
      const { category, tags, language } = prompt;

      // 根据 category 存储提示
      if (!this.promptsByCategory.has(category)) {
        this.promptsByCategory.set(category, []);
      }
      this.promptsByCategory.get(category)?.push(prompt);

      // 根据 tag 存储提示
      for (const tag of tags) {
        if (!this.promptsByTag.has(tag)) {
          this.promptsByTag.set(tag, []);
        }
        this.promptsByTag.get(tag)?.push(prompt);
      }

      // 根据 language 存储提示
      if (!this.promptsByLanguage.has(language)) {
        this.promptsByLanguage.set(language, []);
      }
      this.promptsByLanguage.get(language)?.push(prompt);
    }
  }

  public getPromptsByCategory(category: string): Prompt[] {
    return this.promptsByCategory.get(category) ?? [];
  }

  public getPromptsByTag(tag: string): Prompt[] {
    return this.promptsByTag.get(tag) ?? [];
  }

  public getPromptsByLanguage(language: string): Prompt[] {
    return this.promptsByLanguage.get(language) ?? [];
  }

  public getRandomPrompt(): Prompt {
    return this.allPrompts[Math.floor(Math.random() * this.allPrompts.length)];
  }
}
