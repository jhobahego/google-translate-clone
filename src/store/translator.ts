import { defineStore } from 'pinia'
import { AUTO_LANGUAGE } from '../constants'
import { State, FromLanguage, Language } from '../types'

const useTranslateStore = defineStore({
  id: 'store',

  state: () => {
    return {
      fromLanguage: 'auto',
      toLanguage: 'en',
      fromText: '',
      result: '',
      loading: false
    } as State
  },

  actions: {
    interchangeLanguages() {
      if (this.fromLanguage === AUTO_LANGUAGE) return

      const loading = this.fromText !== ''

      const tempLanguage = this.fromLanguage;
      this.fromLanguage = this.toLanguage;
      this.toLanguage = tempLanguage;
      this.loading = loading;
      this.result = '';
    },
    setFromLanguage(payload: FromLanguage) {
      if (this.fromLanguage === payload) return

      const loading = this.fromText !== ''

      this.fromLanguage = payload,
        this.result = '';
      this.loading = loading
    },

    setToLanguage(payload: Language) {
      if (this.toLanguage === payload) return
      const loading = this.fromText !== ''

      this.toLanguage = payload;
      this.result = '';
      this.loading = loading;
    },

    setFromText(payload: string) {
      const loading = payload !== ''

      this.loading = loading,
        this.fromText = payload;
      this.result = ''
    },

    setResult(payload: string) {
      this.loading = false;
      this.result = payload
    }
  }
})

export default useTranslateStore
