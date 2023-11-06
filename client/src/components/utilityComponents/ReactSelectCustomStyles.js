const customStyles = {
  control: (provided, state) => ({
    // Custom styles for the control (container)
    ...provided,
    backgroundColor: 'lightgray', // Example background color
  }),
  menu: (provided, state) => ({
    // Custom styles for the menu (dropdown)
    ...provided,
    backgroundColor: 'white', // Example background color
  }),
  option: (provided, state) => ({
    // Custom styles for individual options
    ...provided,
    color: state.isSelected ? 'white' : 'black', // Example text color
    backgroundColor: state.isSelected ? 'blue' : 'white', // Example background color
  }),
};
