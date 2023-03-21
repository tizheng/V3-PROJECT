import { defineStore } from 'pinia'
import type { PartialConsult } from '@/types/consults'
import type { ConsultType } from '@/types/enum/index'
import { ref } from 'vue'
export const doctorStore = defineStore(
  'doctor',
  () => {
    const consult = ref<PartialConsult>({} as PartialConsult)

    //设置问诊类型
    const setConsultType = (type: ConsultType) => {
      consult.value.type = type
    }
    //设置极速问诊类型
    const setIllnessType = (type: 0 | 1) => {
      consult.value.illnessType = type
    }
    //设置科室
    const setDepId = (id: string) => {
      consult.value.depId = id
    }
    //设置疾病描述
    const setIllnessDesc = (
      illness: Pick<
        PartialConsult,
        'illnessDesc' | 'illnessTime' | 'consultFlag' | 'pictures'
      >
    ) => {
      consult.value.illnessDesc = illness.illnessDesc
      consult.value.illnessTime = illness.illnessTime
      consult.value.consultFlag = illness.consultFlag
      consult.value.pictures = illness.pictures
    }
    //设置患者ID
    const setPatientId = (id: string) => {
      consult.value.patientId = id
    }
    //设置优惠券ID
    const setCouponId = (id: string) => {
      consult.value.couponId = id
    }
    //清空问诊记录
    const clearConsult = () => {
      consult.value = {} as PartialConsult
    }
    return {
      setConsultType,
      setIllnessType,
      setDepId,
      setIllnessDesc,
      setPatientId,
      setCouponId,
      clearConsult,
      consult
    }
  },
  {
    persist: true
  }
)
