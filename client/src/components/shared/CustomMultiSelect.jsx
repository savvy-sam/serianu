import { Listbox, Transition } from "@headlessui/react";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";

export function MultiSelectWithReactHookForm({ name, options, control ,}) {
  const { setValue } = useForm();
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItems, setSelectedItems] = useState([]);

  const handleSelect = (value) => {
    if (!isSelected(value)) {
      const updatedSelectedItems = [...selectedItems, value];
      setSelectedItems(updatedSelectedItems);
      // setValue(name, updatedSelectedItems); // Update the form value here
    } else {
      handleDeselect(value);
    }
    setIsOpen(true);
  };

  const handleDeselect = (value) => {
    const updatedSelectedItems = selectedItems.filter((item) => item !== value);
    setSelectedItems(updatedSelectedItems);
    setValue(name, updatedSelectedItems); // Update the form value here
    setIsOpen(true);
  };

  const isSelected = (value) => selectedItems.includes(value);

  console.log(selectedItems)

  return (
    <div className="space-y-1">
      < Controller 
       control={control}
       defaultValue=""
       name={name}
       render={({onChange})=>(
        <Listbox
        as="div"
        value={selectedItems}
        onChange={(value) => handleSelect(value)}
        open={isOpen}
      >
        {() => (
          <>
            <Listbox.Label className="block text-sm leading-5 font-medium text-gray-700">
              Select an option
            </Listbox.Label>
            <div className="relative">
              <span className="inline-block w-full rounded-md shadow-sm">
                <Listbox.Button
                  className="cursor-default relative w-full rounded-md border border-gray-300 bg-white pl-3 pr-10 py-2 text-left focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition ease-in-out duration-150 sm:text-sm sm:leading-5"
                  onClick={() => setIsOpen(!isOpen)}
                  open={isOpen}
                >
                  <span className="block truncate">
                    {selectedItems.length < 1
                      ? "Select an option"
                      : `Selected options (${selectedItems.length})`}
                  </span>
                  <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                    <svg
                      className="h-5 w-5 text-gray-400"
                      viewBox="0 0 20 20"
                      fill="none"
                      stroke="currentColor"
                    >
                      <path
                        d="M7 7l3-3 3 3m0 6l-3 3-3-3"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </Listbox.Button>
              </span>

              <Transition
                unmount={false}
                show={isOpen}
                leave="transition ease-in duration-100"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
                className="absolute mt-1 w-full rounded-md bg-white shadow-lg"
              >
                <Listbox.Options
                  static
                  className="max-h-60 rounded-md py-1 text-base leading-6 shadow-xs overflow-auto focus:outline-none sm:text-sm sm:leading-5"
                >
                  {options.map((option) => {
                    const selected = isSelected(option);
                    return (
                      <Listbox.Option key={option} value={option}>
                        {({ active }) => (
                          <div
                            className={`${
                              active
                                ? "text-white bg-blue-600"
                                : "text-gray-900"
                            } cursor-default select-none relative py-2 pl-8 pr-4`}
                          >
                            <span
                              className={`${
                                selected ? "font-semibold" : "font-normal"
                              } block truncate`}
                            >
                              {option}
                            </span>
                            {selected && (
                              <span
                                className={`${
                                  active ? "text-white" : "text-blue-600"
                                } absolute inset-y-0 left-0 flex items-center pl-1.5`}
                              >
                                <svg
                                  className="h-5 w-5"
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 20 20"
                                  fill="currentColor"
                                >
                                  <path
                                    fillRule="evenodd"
                                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                    clipRule="evenodd"
                                  />
                                </svg>
                              </span>
                            )}
                          </div>
                        )}
                      </Listbox.Option>
                    );
                  })}
                </Listbox.Options>
              </Transition>
            </div>
          </>
        )}
      </Listbox>
       )}/>
    </div>
  );
}
