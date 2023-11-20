const customStyles = {
    control: (provided, state) => ({
      ...provided,
      maxWidth: '350px', 
      minHeight: '3rem',
      borderColor: 'indigo', 
      backgroundColor: '#E9ECEF', 
      borderRadius: '10px', 
    }),
  };

  <div className="flex gap-10 items-center px-10 py-4">
          <label
            htmlFor="fields"
            className="text-[#1A2857] text-base font-medium font-montserrat"
          >
            Fields:
          </label>
          {
            <div className="relative w-[18rem]">
              <Select
                value={groupFields}
                name="groupFields"
                onChange={handleSelect}
                options={commonFields?.map((item) => ({
                  value: item.id,
                  label: item.name,
                }))}
                isSearchable={true}
                isClearable={true}
                isMulti={true}
                getOptionLabel={(option) => option.label}
                getOptionValue={(option) => option.value}
                styles={customStyles}
              />
            </div>
          }
        </div>

export const convertToReactSelectFormat = (items) => {
    return items.map((item) => ({
      value: item.id,
      label: item.name,
    }));
  };