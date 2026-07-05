"use client";

interface UserFormProps {
  fullName: string;
  country: string;
  church: string;
  onFullNameChange: (value: string) => void;
  onCountryChange: (value: string) => void;
  onChurchChange: (value: string) => void;
}

export default function UserForm({
  fullName,
  country,
  church,
  onFullNameChange,
  onCountryChange,
  onChurchChange,
}: UserFormProps) {
  return (
    <section className="max-w-xl mx-auto mt-10 px-6">

      <h2 className="text-3xl font-bold text-center mb-8">
        Participant Information
      </h2>

      <div className="space-y-5">

        <div>
          <label className="block mb-2 font-semibold">
            👤 Full Name
          </label>

          <input
            type="text"
            value={fullName}
            onChange={(e) => onFullNameChange(e.target.value)}
            placeholder="Enter your full name"
            className="w-full rounded-xl border border-slate-600 bg-slate-800 px-4 py-3 text-white outline-none focus:border-yellow-400"
          />
        </div>

        <div>
          <label className="block mb-2 font-semibold">
            🌍 Country
          </label>

          <input
            type="text"
            value={country}
            onChange={(e) => onCountryChange(e.target.value)}
            placeholder="Enter your country"
            className="w-full rounded-xl border border-slate-600 bg-slate-800 px-4 py-3 text-white outline-none focus:border-yellow-400"
          />
        </div>

        <div>
          <label className="block mb-2 font-semibold">
            ⛪ Church (Optional)
          </label>

          <input
            type="text"
            value={church}
            onChange={(e) => onChurchChange(e.target.value)}
            placeholder="Enter your church"
            className="w-full rounded-xl border border-slate-600 bg-slate-800 px-4 py-3 text-white outline-none focus:border-yellow-400"
          />
        </div>

      </div>

    </section>
  );
}