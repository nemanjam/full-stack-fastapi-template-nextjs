'use client';

const useCustomToast = () => {
  const showSuccessToast = (description: string) => {
    const options = {
      title: 'Success!',
      description,
      type: 'success',
    };

    console.log(options);
  };

  const showErrorToast = (description: string) => {
    const options = {
      title: 'Something went wrong!',
      description,
      type: 'error',
    };
    console.log(options);
  };

  return { showSuccessToast, showErrorToast };
};

export default useCustomToast;
