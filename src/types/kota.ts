import * as yup from "yup";

export type KotaMainData = {
  text: string;
  value: string;
};

export interface KotaData extends KotaMainData {
  id: string;
  text: string;
  value: string;
}

export const KotaSchema: any = yup.object().shape({
  text: yup.string().required().label("text"),
  value: yup.string().required().label("Value"),
});
