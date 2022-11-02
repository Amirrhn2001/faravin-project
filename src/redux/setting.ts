import { createSlice } from "@reduxjs/toolkit";

type TranslateAction = {
  type: string
  payload: 'makarem' | 'ansarian'
}
type GhariAction = {
  type: string
  payload: 'Minshawy_Murattal' | 'Husary'
}
type FontAction = {
  type: string
  payload: 'text-sm' | 'text-base' | 'text-lg'
}
export const setting = createSlice({
  name: 'setting',
  initialState: { value: {translate: 'makarem', ghari: 'Minshawy_Murattal', fontSize: 'text-base'}},
  reducers: {
    setTranslate: (state, action: TranslateAction) => {
      state.value.translate = action.payload
    },
    setGhari: (state, action: GhariAction) => {
      state.value.ghari = action.payload
    },
    setFontSize: (state, action: FontAction) => {
      state.value.fontSize = action.payload
    },
  }
})

export const { setTranslate, setGhari, setFontSize } = setting.actions

export default setting.reducer;