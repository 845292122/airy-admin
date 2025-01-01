import { service } from '@/utils'

const baseURL = '/system/role'

export const RoleApi = {
  getRoleList: params => service.get(`${baseURL}/list`, { params }),
  getRoleInfo: rid => service.get(`${baseURL}/${rid}`),
  createRole: data => service.post(`${baseURL}`, data),
  modifyRole: data => service.put(`${baseURL}`, data),
  removeRole: rid => service.delete(`${baseURL}/${rid}`)
}
