import { ApiResponse } from "@/types/apiResponse";
import api from "./core";
import { KotaData, KotaMainData } from "@/types/kota";

export const kotaService = {
  getList() {
    return api.get<ApiResponse<KotaData[]>>("/incentive_api/api/v1/dropdown_branch");
  },

  getOne(id: number) {
    return api.get<{ data: KotaData }>("/incentive_api/api/v1/dropdown_branch/" + id);
  },

  create(data: KotaMainData) {
    return api.post("/incentive_api/api/v1/dropdown_branch", data);
  },

  edit(data: { id: string; data: KotaMainData }) {
    return api.patch(`/incentive_api/api/v1/dropdown_branch/${data.id}`, data.data);
  },

  editStatus(data: { id: number; status: Boolean }) {
    return api.patch(`/incentive_api/api/v1/dropdown_branch/${data.id}`, {
      status: data.status,
    });
  },

  delete(id: number) {
    return api.delete(`/incentive_api/api/v1/dropdown_branch/${id}`);
  },
};
