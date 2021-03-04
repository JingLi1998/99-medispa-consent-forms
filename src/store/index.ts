import create from 'zustand'
import { FormField, Section } from '../types'


type Form = {
  name: string;
  sections: Section[];
}

type State = {
  form: Form;
  renameForm: (name: string) => void;
  addSection: (label?: string) => void
  addFormField: (formField: FormField, index: number) => void
}

export const useFormStore = create<State>(set => ({
  form: {
    name: 'Test',
    sections: []
  },
  renameForm: (name:string) => set(({form}) => ({form: {...form, name}})),
  addSection: (label?: string) => set(({form}) => {
    form.sections.push({label, fields:[]}) 
    return { form }
  }),
  addFormField: (formField: FormField, index: number) => set(({form}) => {
    form.sections[index].fields.push(formField) 
    return { form }
  })
}))