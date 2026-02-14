"use client";

import {
  useGetUserPointsQuery,
  useGetUserQuery,
} from "@/redux/features/profile/profileApi";

export default function Profile() {
  const { data: userData, isLoading, error } = useGetUserQuery();
  const { data: pointsData } = useGetUserPointsQuery();

  if (isLoading)
    return <div className="text-center py-10 text-gray-500">Loading...</div>;
  if (error)
    return (
      <div className="text-center py-10 text-red-500">
        Error loading profile.
      </div>
    );

  const user = userData?.user;

  return (
    <div className="max-w-lg mx-auto bg-white shadow-lg rounded-xl p-8 my-12 border border-gray-200">
      {/* Header */}
      <div className="flex items-center gap-4 mb-6">
        {/* Avatar */}
        <div className="w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center text-2xl font-bold text-gray-600">
          {user?.fName?.[0]?.toUpperCase() || "U"}
        </div>
        <div>
          <h2 className="text-2xl font-semibold text-gray-800">
            {user?.fullName}
          </h2>
          <p className="text-gray-500 text-sm">{user?.email}</p>
        </div>
      </div>

      {/* Info Grid */}
      <div className="grid grid-cols-2 gap-6 mb-6">
        <div className="flex flex-col">
          <span className="text-xs text-gray-400 uppercase">Country</span>
          <span className="text-gray-700 font-medium">{user?.country}</span>
        </div>
        <div className="flex flex-col">
          <span className="text-xs text-gray-400 uppercase">Gender</span>
          <span className="text-gray-700 font-medium">{user?.gender}</span>
        </div>
        <div className="flex flex-col">
          <span className="text-xs text-gray-400 uppercase">Date of Birth</span>
          <span className="text-gray-700 font-medium">
            {/* {new Date(user?.dateOfBirth).toLocaleDateString()} */}
          </span>
        </div>
        <div className="flex flex-col">
          <span className="text-xs text-gray-400 uppercase">Balance</span>
          <span className="text-gray-700 font-medium">${user?.balance}</span>
        </div>
      </div>

      {/* Points */}
      <div className="bg-blue-50 p-4 rounded-lg text-center">
        <span className="text-xs text-blue-400 uppercase">Points</span>
        <p className="text-2xl font-bold text-blue-700 mt-1">
          {userData?.user?.points}
        </p>
      </div>
    </div>
  );
}
