import React, { useMemo, useState } from 'react'
import { Controller, useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { useAddUserMutation } from '../../../../api/UserManagement/userSlice';
import { useSelector } from 'react-redux';
import { selectOrgId } from '../../../../features/organization/organizationSlice';
import { useFetchAllApplicationDefinitionQuery } from '../../../../api/Cmdb/applicationDefinitionApiSlices';
import { useFetchAllBackupPlanQuery } from '../../../../api/DataManagement/backupPlanSlices';
import { useFetchAllStorageTypeQuery } from '../../../../api/DataManagement/storageTypeAPISlices';
import { useFetchAllDeviceDefinitionQuery } from '../../../../api/Cmdb/deviceDefinitionSlice';
import { toastError, toastSuccess } from '../../../shared/toast';
import { useCreateDataStorageMutation, useUpdateDataStorageMutation } from '../../../../api/Cmdb/dataStorageApiSlices';

const AddDeviceForm = ({isEdit, selectedDevice}) => {

  console.log(isEdit)
  console.log(selectedDevice)

  const orgId= useSelector(selectOrgId)

  const [errors, setErrors] = useState({});

  const [ createStorage]= useCreateDataStorageMutation();
  const [updateStorage]=useUpdateDataStorageMutation();

  const params = {
      pageNumber: 0,
      pageSize: 10,
      sortBy: 'createdAt',
      sortOrder: 'desc',
      isShort: true,
      orgId: orgId,
    }

  const {data: applications, isError: applicationIsError, error:applicationError }= useFetchAllApplicationDefinitionQuery({...params});
  const {data: backupPlans, isError: bpIsError, error: bpError}= useFetchAllBackupPlanQuery({...params});
  const {data: storageTypes, error: stError}=useFetchAllStorageTypeQuery({...params});
  const {data: deviceDefinitions, error: devError}=useFetchAllDeviceDefinitionQuery({...params});

  // const [application, setApplication]= useState([]);

  const [formValues, setFormValues] = useState({
    name: selectedDevice?.name||'',
    location:selectedDevice?.location||'',
    device:selectedDevice?.deviceDefinitionEntity?.id||'',
    application: selectedDevice?.applicationsEntity?.id||'',
    backupPlan:selectedDevice?.backUpPlanEntity?.id||'',
    organisation: orgId,
    storageType: selectedDevice?.storageType?.id||'',
    id: selectedDevice?.id,
    orgId:orgId
  }) 

  const validateForm = () => {
    const newErrors = {};
    
    if (!formValues.name) {
      newErrors.name = 'Please enter a valid Storage Name';
    }

    if (!formValues.location) {
      newErrors.location = 'Please enter a Valid Location';
    }
    if (!formValues.device) {
      newErrors.device = 'Please enter a valid Storage Name';
    }
    if (!formValues.application) {
      newErrors.application = 'Please enter a valid Storage Name';
    }
    if (!formValues.backupPlan) {
      newErrors.backupPlan = 'Please enter a valid Storage Name';
    }
    if (!formValues.storageType) {
      newErrors.storageType = 'Please enter a valid Storage Name';
    }
  
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const setClassName = (name) => {
    return `bg-[#E9ECEF] rounded-[10px] leading-10 px-3 w-[18rem] h-[3rem] border appearance-none focus:outline-none ${
      errors[name] ? 'border-red-500' : 'focus:ring-indigo-500 focus:border-indigo-500'
    }`;
  }
  
  console.log(formValues)

  const handleInput = (event) => {
    const { name, value } = event.target;
    setFormValues((prev) => {
      return {
        ...prev,
        [name]: value, 
      };
    });

    setErrors({
      ...errors,
      [name]: '',
    });
  };
  

  const handleAddSubmit = async (e) => {
    e.preventDefault()

    console.log(formValues)

    const userData = JSON.stringify(formValues);

    const isValid = validateForm();
    if(isValid){
      if(isEdit){
        try {
          const result =  await updateStorage({
            ...params, domain: userData,
           })
           if(result.error){
            console.log(result)
            throw(result.error)
           }
           toastSuccess("Storage Updated Succesfully")
        } catch (error) {
          console.log(error)
          toastError( error?.data?.message || "Error While Updating Storage")
        }
      }
      else{
        try {
          const result =  await createStorage({
            ...params, domain: userData
           })
  
           if(result.error){
            console.log(result)
            throw(result.error)
           }
           toastSuccess("Storage Created Succesfully")
        } catch (error) {
          console.log(error)
          toastError( error?.data?.message || "Error While Creating Storage")
        }
      }
    }
  };

  return (
    <div className='flex items-center flex-col justify-center'>
      <div className='flex flex-row items-center justify-center'>
        <span className='text-[17px] mb-4 pb-3 font-semibold'>{ isEdit? "Edit Data Storage" : "Create Data Storage"}</span>
      </div>
      <div>
      <form onSubmit={handleAddSubmit}>
          <div class="grid grid-cols-2 gap-[30px]">
              <div class="flex items-center flex-col w-full justify-center">
                <div class="grid grid-cols-3">
                <div class="pl-2 py-2 col-span-1">
                <label
                    htmlFor="storage_name"
                    className="text-[#1A2857] text-base font-medium font-montserrat"
                        >
                          Storage Name:
                </label>
                </div>
                <div class="pl-2 py-2 col-span-2">
                  <input
                          type="text"
                          name="name"
                          value={formValues.name}
                          placeholder="Storage Name"
                          onChange={handleInput}
                          className={setClassName("name")}
                        />
                        {errors.name && (
                        <span className="text-red-500 block">
                          {errors.name}
                        </span>
                        )}
                </div>
                </div>
                <div class="grid grid-cols-3 gap-0">
                    <div class="pl-2 py-2 col-span-1">
                    <label
                        htmlFor="location"
                        className="text-[#1A2857] text-base font-medium font-montserrat"
                            >
                              Location:
                    </label>
                    </div>
                    <div class="pl-2 py-2 col-span-2">
                    <input
                              type="text"
                              name="location"
                              value={formValues.location}
                              placeholder="Location"
                              onChange={handleInput}
                              className={setClassName("location")}
                            />
                            {errors.location && (
                            <span className="text-red-500 block">
                              {errors.location}
                            </span>
                            )}
                    </div>
                </div>
                <div class="grid grid-cols-3 gap-0">
                    <div class="pl-2 py-2 col-span-1">
                    <label
                        htmlFor="device_name"
                        className="text-[#1A2857] text-base font-medium font-montserrat"
                            >
                              Device Name:
                    </label>
                    </div>
                    <div class="pl-2 py-2 col-span-2">
                    <div className="relative">
                      <select
                        name='device'
                        value={formValues.device}
                        className={setClassName("device")}
                        onChange={handleInput}
                        >
                          <option value="" hidden>
                            Device
                          </option>
                          `{deviceDefinitions &&
                          deviceDefinitions?.data?.map((size) => (
                              <option key={size.id} value={size.id}>
                                {size.name}
                              </option>
                            ))}
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-gray-700">
                          <span className="text-xl">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                              <path d="M24 2.57143V21.4286C24 22.8482 22.8482 24 21.4286 24H2.57143C1.15179 24 0 22.8482 0 21.4286V2.57143C0 1.15179 1.15179 0 2.57143 0H21.4286C22.8482 0 24 1.15179 24 2.57143ZM4.95536 10.0982L11.5446 16.6875C11.7964 16.9393 12.2036 16.9393 12.4554 16.6875L19.0446 10.0982C19.4518 9.69107 19.1625 9 18.5893 9H5.41071C4.8375 9 4.54821 9.69107 4.95536 10.0982Z" fill="#1A2857"/>
                            </svg>
                          </span>
                        </div>
                      </div>
                    </div>
                </div>
              </div>
              <div class="flex items-center flex-col w-full justify-center ml-2">
                <div class="grid grid-cols-3 gap-0">
                <div class="pl-2 py-2 col-span-1">
                <label
                    htmlFor="application"
                    className="text-[#1A2857] text-base font-medium font-montserrat"
                        >
                          Application:
                </label>
                </div>
                <div class="pl-2 py-2 col-span-2">
                <div className="relative">
                  <select
                    name="application"
                    value={formValues.application}
                    className={setClassName("application")}
                    onChange={handleInput}
                    >
                      <option value="" hidden>
                       Application
                      </option>
                      `{applications &&
                        applications?.data?.map((size) => (
                          <option key={size.id} value={size.id}>
                            {size.name}
                          </option>
                        ))}
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-gray-700">
                      <span className="text-xl">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                          <path d="M24 2.57143V21.4286C24 22.8482 22.8482 24 21.4286 24H2.57143C1.15179 24 0 22.8482 0 21.4286V2.57143C0 1.15179 1.15179 0 2.57143 0H21.4286C22.8482 0 24 1.15179 24 2.57143ZM4.95536 10.0982L11.5446 16.6875C11.7964 16.9393 12.2036 16.9393 12.4554 16.6875L19.0446 10.0982C19.4518 9.69107 19.1625 9 18.5893 9H5.41071C4.8375 9 4.54821 9.69107 4.95536 10.0982Z" fill="#1A2857"/>
                        </svg>
                      </span>
                    </div>
                  </div>
                </div>
                </div>
                <div class="grid grid-cols-3 gap-0">
                    <div class="pl-2 py-2 col-span-1">
                    <label
                        htmlFor="application"
                        className="text-[#1A2857] text-base font-medium font-montserrat"
                            >
                              Backup Plan:
                    </label>
                    </div>
                    <div class="pl-2 py-2 col-span-2">
                    <div className="relative">
                      <select
                        name="backupPlan"
                        value={formValues.backupPlan}
                        className={setClassName("backupPlan")}
                        onChange={handleInput}
                        >
                          <option value="" hidden>
                            Backup Plan
                          </option>
                          `{backupPlans &&
                          backupPlans?.data?.map((size) => (
                              <option key={size.id} value={size.id}>
                                {size.name}
                              </option>
                            ))}
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-gray-700">
                          <span className="text-xl">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                              <path d="M24 2.57143V21.4286C24 22.8482 22.8482 24 21.4286 24H2.57143C1.15179 24 0 22.8482 0 21.4286V2.57143C0 1.15179 1.15179 0 2.57143 0H21.4286C22.8482 0 24 1.15179 24 2.57143ZM4.95536 10.0982L11.5446 16.6875C11.7964 16.9393 12.2036 16.9393 12.4554 16.6875L19.0446 10.0982C19.4518 9.69107 19.1625 9 18.5893 9H5.41071C4.8375 9 4.54821 9.69107 4.95536 10.0982Z" fill="#1A2857"/>
                            </svg>
                          </span>
                        </div>
                      </div>
                    </div>
                </div>
                <div class="grid grid-cols-3 gap-0">
                    <div class="pl-2 py-2 col-span-1">
                    <label
                        htmlFor="storageType"
                        className="text-[#1A2857] text-base font-medium font-montserrat"
                            >
                              Storage Types:
                    </label>
                    </div>
                    <div class="pl-2 py-2 col-span-2">
                    <div className="relative">
                      <select
                        name="storageType"
                        value={formValues.storageType}
                        className={setClassName("storageType")}
                        onChange={handleInput}
                        >
                          <option value="" hidden>
                            Storage Types
                          </option>
                          `{storageTypes &&
                          storageTypes?.data?.map((size) => (
                              <option key={size.id} value={size.id}>
                                {size.name}
                              </option>
                            ))}
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-gray-700">
                          <span className="text-xl">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                              <path d="M24 2.57143V21.4286C24 22.8482 22.8482 24 21.4286 24H2.57143C1.15179 24 0 22.8482 0 21.4286V2.57143C0 1.15179 1.15179 0 2.57143 0H21.4286C22.8482 0 24 1.15179 24 2.57143ZM4.95536 10.0982L11.5446 16.6875C11.7964 16.9393 12.2036 16.9393 12.4554 16.6875L19.0446 10.0982C19.4518 9.69107 19.1625 9 18.5893 9H5.41071C4.8375 9 4.54821 9.69107 4.95536 10.0982Z" fill="#1A2857"/>
                            </svg>
                          </span>
                        </div>
                      </div>
                    </div>
                </div>
              </div>
          </div>
        <div className='flex justify-center items-center'>
        <button
          type='submit'
          className='m-5 text-white bg-[#1A2857] w-[14.063rem] h-[2.5rem] p-2 justify-center items-center rounded-md'
        >
          Save And Exit
        </button>
      </div>
      </form>
      </div>
    </div>  
  )
}

export default AddDeviceForm