export const handleApiError = (error) => {
  if (process.env.NODE_ENV !== 'development') {
    console.warn('[API Error]', error, error.message);
  }
  if (!error.message) return 'Something went wrong';

  // the error codes are just examples, we can inquire about the error codes that will be returned in various instances

  switch (error.status) {
    case -1:
      return error.message || 'Something went wrong';
    case -2:
      return error.message || 'Resource not found';
    case 2:
      return 'A duplicate already exists';
      case 99:
        return  'unauthorized'
    default:
      return 'Bad Request';
  }
};