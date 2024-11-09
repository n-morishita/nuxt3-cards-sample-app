// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  modules: ["@invictus.codes/nuxt-vuetify"],
  typescript: {
    shim: false, // Volar(拡張機能)を使用する場合はfalse
    strict: true, // 厳密な型チェックを有効にする
    typeCheck: true, // 開発時の型チェックを有効にする(ビルドパフォーマンスを最適化するためデフォルトでは型チェックが行われない)
  },
});
