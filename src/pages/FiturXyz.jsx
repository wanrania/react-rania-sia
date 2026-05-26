import React from "react";
import PageHeader from "../components/PageHeader";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

// Data sampel isu terhangat (bisa diganti dengan fetch dari API)
const hotIssues = [
  {
    id: 1,
    title: "Persiapan Akhir Pilkada Serentak 2026",
    category: "Politik",
    views: "1.2M",
    trend: "Naik 📈",
  },
  {
    id: 2,
    title: "Regulasi Baru AI dan Hak Cipta Pekerja Kreatif",
    category: "Teknologi",
    views: "850K",
    trend: "Naik 📈",
  },
  {
    id: 3,
    title: "Dampak Perubahan Iklim pada Panen Kuartal II",
    category: "Lingkungan",
    views: "640K",
    trend: "Stabil ➖",
  },
  {
    id: 4,
    title: "Kebijakan Transisi Energi Hijau di Sektor Transportasi",
    category: "Ekonomi",
    views: "520K",
    trend: "Turun 📉",
  },
];

export default function FiturXyz() {
  return (
    <div className="p-4">
      {/* Page Header */}
      <PageHeader title="Fitur XYZ" breadcrumb={["Dashboard", "Fitur XYZ"]} />

      {/* Kontainer Tabel */}
      <div className="mt-6 p-6 bg-white rounded-xl shadow-sm border border-gray-100">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-xl font-bold text-gray-800">
            🔥 Isu Terhot Hari Ini
          </h1>
          <span className="text-sm text-gray-500">26 Mei 2026</span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-100 text-gray-700 uppercase text-sm leading-normal">
                <th className="py-3 px-6 border-b">No</th>
                <th className="py-3 px-6 border-b">Topik Isu</th>
                <th className="py-3 px-6 border-b">Kategori</th>
                <th className="py-3 px-6 border-b">Interaksi/Views</th>
                <th className="py-3 px-6 border-b">Tren</th>
              </tr>
            </thead>
            <tbody className="text-gray-600 text-sm font-light">
              {hotIssues.map((issue, index) => (
                <tr
                  key={issue.id}
                  className="border-b border-gray-200 hover:bg-gray-50 transition duration-150"
                >
                  <td className="py-3 px-6 whitespace-nowrap font-medium text-gray-900">
                    {index + 1}
                  </td>
                  <td className="py-3 px-6 font-semibold">{issue.title}</td>
                  <td className="py-3 px-6">
                    <span className="bg-blue-100 text-blue-800 py-1 px-3 rounded-full text-xs">
                      {issue.category}
                    </span>
                  </td>
                  <td className="py-3 px-6">{issue.views}</td>
                  <td className="py-3 px-6 font-bold">{issue.trend}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      {/* Tombol Aksi */}
      <div className="mt-6 flex justify-end">
        <Button variant="outline">Batal</Button>
        <Button variant="ghost">Edit</Button>
        <Button variant="destructive">Hapus</Button>
      </div>
      <Card className="mt-4 relative mx-auto w-full max-w-sm pt-0">
        <div className="absolute inset-0 z-30 aspect-video bg-black/35" />

        <img
          src="https://avatar.vercel.sh/shadcn1"
          alt="Event cover"
          className="relative z-20 aspect-video w-full object-cover brightness-60 grayscale dark:brightness-40"
        />

        <CardHeader>
          <CardAction>
            <Badge variant="secondary">Featured</Badge>
          </CardAction>

          <CardTitle>Design systems meetup</CardTitle>

          <CardDescription>
            A practical talk on component APIs, accessibility, and shipping
            faster.
          </CardDescription>
        </CardHeader>

        <CardFooter>
          <Button className="w-full">View Event</Button>
        </CardFooter>
      </Card>
    </div>
  );
}
