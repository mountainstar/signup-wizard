import { reactive, readonly } from 'vue';

const errorState = reactive({
  isError: false,
  errorMessage: '',
});

const setError = (message: string, timeout = 5000) => {
  errorState.isError = true;
  errorState.errorMessage = message;

  setTimeout(clearError, timeout);
};

const clearError = () => {
  errorState.isError = false;
  errorState.errorMessage = '';
};

export const useErrorHandling = () => {
  return {
    errorState: readonly(errorState),
    setError,
    clearError,
  };
};
