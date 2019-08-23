import {createAPI, createFileAPI} from '@/utils/request'

// 查询部门列表的API
export const list = data => createAPI('/company/departments/findAllDepartment', 'get', data)
// 保存部门的API
export const save = date => createAPI('/company/departments/saveDepartment', 'post', data)
// 根据id查询的API
export const detail = date => createAPI(`/company/departments/findByIdDepartment/${data.id}`, 'get', data)
// 根据id删除的API
export const remove = data => createAPI(`/company/departments/deleteByIdDepartment/${data.id}`, 'delete', data)
// 根据id更新的API
export const update = data => createAPI(`/company/departments/updateByIdDepartment/${data.id}`, 'put', data)
// 保存或更新的方法
export const saveOrUpdate = data => { return data.id ? update(data) : save(data) }

