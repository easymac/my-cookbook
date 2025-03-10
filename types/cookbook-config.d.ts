declare module '@/cookbook.config' {
  interface CookbookConfig {
    siteTitle: string;
    themeColor: string;
    siteDescription: string;
    siteURL: string;
    faviconDirectory: string;
    logoCharacter?: string;
  }

  const CONFIG: CookbookConfig;
  export default CONFIG;
} 