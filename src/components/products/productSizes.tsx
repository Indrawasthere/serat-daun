interface Props {
  sizes: any;
  onSizeChange?: (size: string) => void;
}

export default function ProductSizes({ sizes, onSizeChange }: Props) {
  const sizeID = Date.now();

  const handleSizeChange = (size: string) => {
    if (onSizeChange) {
      onSizeChange(size);
    }
  };

  return (
    <>
      <div className="mt-4 d-flex justify-content-between align-items-center">
        <h6 className="mb-0">Ukuran</h6>
        <a href="#" className="text-body mb-0">
          Panduan Ukuran
        </a>
      </div>
      <div className="d-flex flex-wrap text-center my-4">
        {Object.entries(sizes).map(([size, amount], i) => (
          <div key={i} className="mb-3 me-3">
            <div className="form-check">
              {amount != 0 ? (
                <input
                  className="form-check-input rounded-2"
                  type="radio"
                  name="flexRadioDefault"
                  id={`input` + sizeID + i}
                  onChange={() => handleSizeChange(size)}
                />
              ) : (
                <input
                  className="form-check-input rounded-2"
                  disabled
                  type="radio"
                  name="flexRadioDefault"
                  id={`input` + sizeID + i}
                />
              )}
              <label className="cursor-pointer" htmlFor={`input` + sizeID + i}>
                {size}
              </label>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
