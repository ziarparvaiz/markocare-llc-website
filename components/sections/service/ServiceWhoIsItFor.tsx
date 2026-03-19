import { Users } from 'lucide-react';

type Props = { whoIsItFor: string };

export default function ServiceWhoIsItFor({ whoIsItFor }: Props) {
  return (
    <div className="rounded-2xl border border-mc-stone bg-mc-cream p-7">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-9 h-9 rounded-xl bg-mc-leaf-100 flex items-center justify-center shrink-0">
          <Users className="h-4 w-4 text-mc-leaf-600" aria-hidden="true" />
        </div>
        <div>
          <span className="eyebrow text-xs">Best Suited For</span>
          <h2 className="text-xl font-bold text-mc-forest leading-tight">
            Who Is This Service For?
          </h2>
        </div>
      </div>
      <p className="text-gray-600 leading-relaxed">{whoIsItFor}</p>
    </div>
  );
}
