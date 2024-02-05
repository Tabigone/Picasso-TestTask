import "./ErrorLoading.css";

export const ErrorLoading = ({ error }: { error: object }) => {
  return (
    <p className="loading-error">
      <span>Ошибка при загрузке:</span>
      <span>{error && JSON.stringify(error)}</span>
    </p>
  );
};
