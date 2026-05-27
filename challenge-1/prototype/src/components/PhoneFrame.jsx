export default function PhoneFrame({ children }) {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div
        className="relative rounded-[3rem] bg-gray-900 ring-4 ring-gray-700 shadow-2xl overflow-hidden"
        style={{ width: 390, height: 844 }}
      >
        <div className="absolute inset-[3px] rounded-[2.6rem] overflow-hidden">
          {children}
        </div>
      </div>
    </div>
  );
}
