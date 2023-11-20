export const validateCorFields = (item) => {
    const newErrors = [];
    const isValid = item.every((formula, index) => {
      const {field, value, operation, correlationOperation} = formula;
      const error = {};

      if (!field) {
        error.field = 'Field is required';
      }
      if (!value) {
        error.value = 'Value is required';
      }
      if (!operation) {
        error.operation = 'Operation is required';
      }
      if (!correlationOperation) {
        error.correlationOperation = 'This Field is required';
      }
      newErrors[index] = error;
      return Object.keys(error).length === 0;
    });

    return {isValid, newErrors}
  }

  //validate simple formula

  export const validateSimFields = (item) => {
    const newErrors = [];
    const isValid = item.every((formula, index) => {
      const { field, value, operation} = formula;
      const error = {};

      if (!field) {
        error.field = 'Field Type is required';
      }
      if (!value) {
        error.value = 'Value 2 is required';
      }
      if (!operation) {
        error.operation = 'Operation is required';
      }
      newErrors[index] = error;
      return Object.keys(error).length === 0;
    });

    return {isValid, newErrors}
  }

  ///check all brackets are closed

  export function allBracketsAreClosed(item) {
    let openCount = 0;
    let closeCount = 0;
  
    for (const obj of item) {
      if (obj.openingBracket === true) {
        openCount++;
      }
      if (obj.closingBracket === true) {
        closeCount++;
      }
    }
  
    return openCount === closeCount;
  }

  //convert multiselect items

 export const convertToReactSelectFormat = (items) => {
    return items.map((item) => ({
      value: item.id,
      label: item.name,
    }));
  };

  export function filterSimpleProperties(arr) {
    return arr.map((obj) => {
      return { 
      openingBracket: obj?.openingBracket,
      closingBracket: obj?.closingBracket,
      field: obj?.fieldDefinitionEntity?.id,
      operation: obj?.operation?.id,
      value: obj?.operationValue,
      joiner: obj?.operationJoiner?.id,
      correlationOperation:null
      };
    });
  }

  export function filterCorProperties(arr) {
    return arr.map((obj) => {
      return {
        openingBracket: obj?.openingBracket,
        closingBracket: obj?.closingBracket,
        field: obj?.fieldDefinitionEntity?.id,
        operation:obj?.operation?.id,
        value: obj?.operationValue,
        correlationOperation: obj?.correlationOperator?.id,
        joiner: obj?.operationJoiner?.id,
       };
    });
  }
  


  
  

  

  