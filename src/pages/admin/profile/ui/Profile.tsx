import {
    Mail,
    Phone,
    MapPin,
    ChevronRight,
    ListChecks,

} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/shared/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/shared/ui/card";
import { Button } from "@/shared/ui/button";
import { Badge } from "@/shared/ui/badge";

interface ProfileProps {
    title?: string;
}

export const Profile = ({ title }: ProfileProps) => {
    return (
        <div className="space-y-8">
            {/* --- Header Section --- */}
            <div className="flex flex-col gap-1">
                <h1 className="text-3xl font-bold tracking-tight text-slate-900">
                    {title || "User Profile"}
                </h1>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                {/* --- Primary Info (Left Column) --- */}
                <div className="lg:col-span-4 sticky top-24">
                    <UserProfileCard />
                </div>

                {/* --- Settings & Details (Right Column) --- */}
                <div className="lg:col-span-8 space-y-8">
                    <AccountSettingsCard />

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <RecentActivityCard />
                        <PermissionsRolesCard />
                    </div>
                </div>
            </div>

            {/* --- Page Footer --- */}
            <footer className="pt-8 pb-4 border-t border-slate-100 text-center">
                <p className="text-sm text-slate-400">
                    © {new Date().getFullYear()} Admin Dashboard. All rights reserved.
                </p>
            </footer>
        </div>
    );
};

// --- Local Components ---

const UserProfileCard = () => (
    <Card className="overflow-hidden">
        <CardContent className="pt-8 flex flex-col items-center text-center">
            <Avatar size="lg" className="size-24 mb-4 ring-4 ring-slate-50">
                <AvatarImage src="" alt="profile pic" />
                <AvatarFallback>AJ</AvatarFallback>
            </Avatar>

            <div className="space-y-1 mb-6">
                <h2 className="text-xl font-bold text-slate-900">Alex Johnson</h2>
                <p className="text-sm text-slate-500 font-medium">Senior Admin & Data Analyst</p>
            </div>

            <div className="w-full h-px bg-slate-100 mb-6" />

            <div className="w-full space-y-3 mb-6">
                <DetailRow icon={<Mail />} label="alex.johnson@example.com" />
                <DetailRow icon={<Phone />} label="+1 (555) 123-4567" />
                <DetailRow icon={<MapPin />} label="New York, USA" />
            </div>

            <p className="text-sm text-slate-500 text-left leading-relaxed mb-8">
                Passionate about data-driven insights and optimizing operational workflows. I specialize in backend architecture and enjoy contributing to open-source projects in my free time.
            </p>

            <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-6 rounded-xl shadow-sm">
                Edit Profile
            </Button>
        </CardContent>
    </Card>
);

const DetailRow = ({ icon, label }: any) => (
    <div className="flex items-center gap-3 text-sm text-slate-600">
        <div className="size-4 text-slate-400">{icon}</div>
        <span>{label}</span>
    </div>
);

const AccountSettingsCard = () => (
    <Card>
        <CardHeader className="border-b pb-4 px-6">
            <CardTitle className="text-lg font-bold">Account Settings</CardTitle>
        </CardHeader>
        <CardContent className="p-0">
            <section className="px-6 py-4">
                <h3 className="text-sm font-semibold text-slate-900 mb-4">General</h3>
                <div className="space-y-4">
                    <SettingItem label="Language" value="English" />
                    <div className="h-px bg-slate-50" />
                    <SettingItem label="Timezone" value="UTC-5 (Eastern Time)" />
                    <div className="h-px bg-slate-50" />
                    <SettingItem label="Default View" value="Dashboard" />
                </div>
            </section>

            <section className="px-6 py-4">
                <h3 className="text-sm font-semibold text-slate-900 mb-4">Notifications</h3>
                <div className="space-y-4">
                    <SettingItem label="Email Notifications" description="Receive updates via email." value="On" />
                    <div className="h-px bg-slate-50" />
                    <SettingItem label="Push Notifications" description="Receive mobile alerts." value="Off" />
                    <div className="h-px bg-slate-50" />
                    <SettingItem label="SMS Alerts" description="Receive critical alerts via SMS." value="Off" />
                </div>
            </section>
        </CardContent>
    </Card>
);

const SettingItem = ({ label, description, value }: any) => (
    <div className="flex items-center justify-between group cursor-pointer">
        <div className="flex flex-col">
            <span className="text-sm font-medium text-slate-700">{label}</span>
            {description && <span className="text-xs text-slate-400 mt-0.5">{description}</span>}
        </div>
        <div className="flex items-center gap-2">
            <span className="text-sm text-slate-500 font-medium">{value}</span>
            <ChevronRight className="size-4 text-slate-300 group-hover:text-slate-500 transition-colors" />
        </div>
    </div>
);

const RecentActivityCard = () => {
    const activities = [
        { title: "Updated profile information", date: "2024-07-29 10:30 AM" },
        { title: "Logged in from new device", date: "2024-07-28 09:15 PM" },
        { title: "Changed password", date: "2024-07-25 02:00 PM" },
        { title: "Accessed sales report", date: "2024-07-24 11:00 AM" },
    ];

    return (
        <Card className="h-full">
            <CardHeader className="border-b pb-4 px-6">
                <CardTitle className="text-lg font-bold">Recent Activity</CardTitle>
            </CardHeader>
            <CardContent className="px-6 py-4">
                <div className="space-y-6">
                    {activities.map((activity, index) => (
                        <div key={index} className="flex flex-col gap-1 border-b border-slate-50 last:border-0 pb-4 last:pb-0">
                            <span className="text-sm font-medium text-slate-800">{activity.title}</span>
                            <span className="text-xs text-slate-400 font-medium">{activity.date}</span>
                        </div>
                    ))}
                </div>
            </CardContent>
        </Card>
    );
};

const PermissionsRolesCard = () => {
    const roles = [
        {
            name: "Administrator",
            permissions: ["Full Access", "User Management"],
        },
        {
            name: "Data Analyst",
            permissions: ["View Reports", "Create Dashboards"],
        },
        {
            name: "Support Agent",
            permissions: ["View User Data", "Reset Passwords"],
        },
    ];

    return (
        <Card className="h-full">
            <CardHeader className="border-b pb-4 px-6">
                <CardTitle className="text-lg font-bold">Permissions & Roles</CardTitle>
            </CardHeader>
            <CardContent className="px-6 py-6">
                <div className="space-y-8">
                    {roles.map((role, index) => (
                        <div key={index} className="space-y-4">
                            <div className="flex items-center gap-2 text-slate-800 font-bold">
                                <ListChecks className="size-4 text-slate-400" />
                                <span>{role.name}</span>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {role.permissions.map((permission, pIndex) => (
                                    <Badge
                                        key={pIndex}
                                        variant="secondary"
                                        className="bg-slate-100 text-slate-700 text-[11px] font-medium border-none px-3 py-1"
                                    >
                                        {permission}
                                    </Badge>
                                ))}
                            </div>
                            {index < roles.length - 1 && <div className="h-px bg-slate-50 mt-6" />}
                        </div>
                    ))}
                </div>
            </CardContent>
        </Card>
    );
};
