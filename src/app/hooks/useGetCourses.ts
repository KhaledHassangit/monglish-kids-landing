


export const getCoursePackagesUrl = () => {
  const isUser = typeof window !== 'undefined' && sessionStorage.getItem('userInfo');
  return isUser ? '/api/user/get-course-packages' : '/api/session/get-course-packages';
};


