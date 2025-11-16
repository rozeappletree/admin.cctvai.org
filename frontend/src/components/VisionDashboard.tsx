import React, { useState } from 'react';
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell
} from 'recharts';
import {
  Wallet,
  Globe,
  FileText,
  ShoppingCart,
  TrendingUp,
  Bell,
  Package,
  CheckCircle,
  Zap,
  Activity,
  LayoutDashboard,
  Table,
  CreditCard,
  User,
  Rocket,
  Settings,
  HelpCircle,
  Menu,
  X
} from 'lucide-react';

interface StatCardProps {
  icon: React.ElementType;
  label: string;
  value: string;
  change: string;
  isPositive: boolean;
}

interface ProgressBarProps {
  value: number;
  color?: string;
}

const VisionDashboard = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [sidebarOpen, setSidebarOpen] = useState(true);

  // Chart Data
  const lineChartData = [
    { month: 'Jan', mobile: 500, websites: 200 },
    { month: 'Feb', mobile: 250, websites: 230 },
    { month: 'Mar', mobile: 300, websites: 300 },
    { month: 'Apr', mobile: 220, websites: 350 },
    { month: 'May', mobile: 500, websites: 370 },
    { month: 'Jun', mobile: 250, websites: 420 },
    { month: 'Jul', mobile: 300, websites: 550 },
    { month: 'Aug', mobile: 230, websites: 350 },
    { month: 'Sep', mobile: 300, websites: 400 },
    { month: 'Oct', mobile: 350, websites: 500 },
    { month: 'Nov', mobile: 250, websites: 330 },
    { month: 'Dec', mobile: 400, websites: 550 }
  ];

  const barChartData = [
    { month: 'Apr', value: 330 },
    { month: 'May', value: 250 },
    { month: 'Jun', value: 110 },
    { month: 'Jul', value: 300 },
    { month: 'Aug', value: 490 },
    { month: 'Sep', value: 350 },
    { month: 'Oct', value: 270 },
    { month: 'Nov', value: 130 },
    { month: 'Dec', value: 425 }
  ];

  const projects = [
    { name: 'Chakra UI Version', members: 5, budget: '$14,000', completion: 60 },
    { name: 'Add Progress Track', members: 2, budget: '$3,000', completion: 10 },
    { name: 'Fix Platform Errors', members: 2, budget: 'Not set', completion: 100 },
    { name: 'Launch Mobile App', members: 4, budget: '$32,000', completion: 100 },
    { name: 'Add New Pricing Page', members: 5, budget: '$400', completion: 25 }
  ];

  const timeline = [
    { icon: Bell, title: '$2400, Design changes', date: '22 DEC 7:20 PM', color: '#582CFF' },
    { icon: Package, title: 'New order #4219423', date: '21 DEC 11:21 PM', color: '#FF6B6B' },
    { icon: ShoppingCart, title: 'Server Payments for April', date: '21 DEC 9:28 PM', color: '#4FD1C5' },
    { icon: FileText, title: 'New card added for order #3210145', date: '20 DEC 3:52 PM', color: '#FFB547' }
  ];

  const navItems = [
    { icon: LayoutDashboard, label: 'Dashboard', id: 'dashboard' },
    { icon: Table, label: 'Tables', id: 'tables' },
    { icon: CreditCard, label: 'Billing', id: 'billing' },
    { icon: Rocket, label: 'RTL', id: 'rtl' }
  ];

  const accountItems = [
    { icon: User, label: 'Profile', id: 'profile' },
    { icon: FileText, label: 'Sign In', id: 'signin' },
    { icon: Rocket, label: 'Sign Up', id: 'signup' }
  ];

  const StatCard = ({ icon: Icon, label, value, change, isPositive }: StatCardProps) => (
    <div className="bg-gradient-to-br from-indigo-900/40 to-purple-900/20 backdrop-blur-xl rounded-2xl p-6 border border-white/10">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-gray-400 text-sm font-medium mb-1">{label}</p>
          <div className="flex items-end gap-2">
            <h3 className="text-white text-2xl font-bold">{value}</h3>
            <span className={`text-sm font-semibold ${isPositive ? 'text-green-400' : 'text-red-400'}`}>
              {change}
            </span>
          </div>
        </div>
        <div className="bg-gradient-to-br from-purple-500 to-purple-600 p-3 rounded-xl">
          <Icon className="w-6 h-6 text-white" />
        </div>
      </div>
    </div>
  );

  const ProgressBar = ({ value, color = '#582CFF' }: ProgressBarProps) => (
    <div className="w-full bg-gray-800 rounded-full h-1.5">
      <div
        className="h-1.5 rounded-full transition-all duration-300"
        style={{ width: `${value}%`, backgroundColor: color }}
      />
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-indigo-950 to-purple-950 text-white flex">
      {/* Sidebar */}
      <aside className={`fixed lg:static inset-y-0 left-0 z-50 w-64 bg-gradient-to-b from-indigo-900/40 to-purple-900/20 backdrop-blur-xl border-r border-white/10 transform transition-transform duration-300 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}`}>
        <div className="h-full flex flex-col p-4">
          {/* Logo */}
          <div className="mb-8 pt-4">
            <div className="flex items-center gap-3 px-3">
              <div className="bg-gradient-to-br from-purple-500 to-purple-600 p-2 rounded-lg">
                <Activity className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-sm font-bold tracking-wider bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                  CCTV SURVEILLANCE
                </h2>
              </div>
            </div>
            <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mt-6" />
          </div>

          {/* Navigation */}
          <nav className="flex-1 space-y-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                  activeTab === item.id
                    ? 'bg-gradient-to-r from-purple-500 to-purple-600 text-white shadow-lg shadow-purple-500/30'
                    : 'text-gray-400 hover:text-white hover:bg-white/5'
                }`}
              >
                <div className={`p-2 rounded-lg ${activeTab === item.id ? 'bg-white/20' : 'bg-indigo-900/40'}`}>
                  <item.icon className="w-4 h-4" />
                </div>
                <span className="font-medium text-sm">{item.label}</span>
              </button>
            ))}

            {/* Account Pages Section */}
            <div className="pt-6">
              <p className="text-xs font-bold text-gray-500 px-4 mb-3 tracking-wider">
                ACCOUNT PAGES
              </p>
              {accountItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                    activeTab === item.id
                      ? 'bg-gradient-to-r from-purple-500 to-purple-600 text-white shadow-lg shadow-purple-500/30'
                      : 'text-gray-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <div className={`p-2 rounded-lg ${activeTab === item.id ? 'bg-white/20' : 'bg-indigo-900/40'}`}>
                    <item.icon className="w-4 h-4" />
                  </div>
                  <span className="font-medium text-sm">{item.label}</span>
                </button>
              ))}
            </div>
          </nav>

          {/* Help Card */}
          <div className="mt-auto bg-gradient-to-br from-purple-600/40 to-indigo-600/40 rounded-xl p-4 relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMSkiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-20" />
            <div className="relative">
              <div className="bg-white p-2 rounded-lg w-fit mb-3">
                <HelpCircle className="w-5 h-5 text-purple-600" />
              </div>
              <h3 className="font-bold text-sm mb-1">Need help?</h3>
              <p className="text-xs text-gray-300 mb-3">Please check our docs</p>
              <button className="w-full bg-gradient-to-br from-indigo-900/60 to-purple-900/60 hover:from-indigo-900/80 hover:to-purple-900/80 text-white text-xs font-bold py-2 rounded-lg transition-all">
                DOCUMENTATION
              </button>
            </div>
          </div>
        </div>
      </aside>

      {/* Mobile Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Main Content */}
      <div className="flex-1 min-w-0 overflow-auto">
        <div className="p-6">
          {/* Header */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setSidebarOpen(!sidebarOpen)}
                  className="lg:hidden bg-indigo-900/30 border border-white/10 p-2 rounded-xl hover:bg-indigo-900/50 transition-colors"
                >
                  {sidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                </button>
                <div>
                  <h1 className="text-3xl font-bold mb-1">Vision UI Dashboard</h1>
                  <p className="text-gray-400">Welcome back, Mark Johnson</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="relative hidden md:block">
                  <input
                    type="text"
                    placeholder="Type here..."
                    className="bg-indigo-900/30 border border-white/10 rounded-xl px-4 py-2 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-purple-500"
                  />
                </div>
                <button className="bg-indigo-900/30 border border-white/10 p-2 rounded-xl hover:bg-indigo-900/50 transition-colors">
                  <Bell className="w-5 h-5" />
                </button>
                <button className="bg-indigo-900/30 border border-white/10 p-2 rounded-xl hover:bg-indigo-900/50 transition-colors">
                  <Settings className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
            <StatCard
              icon={Wallet}
              label="Today's Money"
              value="$53,000"
              change="+55%"
              isPositive={true}
            />
            <StatCard
              icon={Globe}
              label="Today's Users"
              value="2,300"
              change="+5%"
              isPositive={true}
            />
            <StatCard
              icon={FileText}
              label="New Clients"
              value="+3,020"
              change="-14%"
              isPositive={false}
            />
            <StatCard
              icon={ShoppingCart}
              label="Total Sales"
              value="$173,000"
              change="+8%"
              isPositive={true}
            />
          </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
            {/* Welcome Card */}
            <div className="lg:col-span-2 bg-gradient-to-br from-purple-600/40 via-indigo-600/40 to-blue-600/40 backdrop-blur-xl rounded-2xl p-8 border border-white/10 relative overflow-hidden">
              <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMSkiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-30" />
              <div className="relative z-10">
                <p className="text-gray-300 text-sm font-medium mb-2">Welcome back,</p>
                <h2 className="text-4xl font-bold mb-4">Mark Johnson</h2>
                <p className="text-gray-200 mb-8 max-w-md">
                  Glad to see you again! Ask me anything.
                </p>
                <button className="flex items-center gap-2 text-white font-medium hover:gap-3 transition-all">
                  <span>Tap to record</span>
                  <TrendingUp className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Satisfaction Rate */}
            <div className="bg-gradient-to-br from-indigo-900/40 to-purple-900/20 backdrop-blur-xl rounded-2xl p-6 border border-white/10">
              <h3 className="text-lg font-bold mb-2">Satisfaction Rate</h3>
              <p className="text-gray-400 text-sm mb-6">From all projects</p>
              
              <div className="flex flex-col items-center justify-center py-8">
                <div className="relative w-40 h-40 mb-6">
                  <svg className="w-full h-full transform -rotate-90">
                    <circle
                      cx="80"
                      cy="80"
                      r="70"
                      stroke="rgba(255,255,255,0.1)"
                      strokeWidth="12"
                      fill="none"
                    />
                    <circle
                      cx="80"
                      cy="80"
                      r="70"
                      stroke="#582CFF"
                      strokeWidth="12"
                      fill="none"
                      strokeDasharray={`${2 * Math.PI * 70 * 0.95} ${2 * Math.PI * 70}`}
                      strokeLinecap="round"
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="bg-purple-500 p-3 rounded-xl mb-2 mx-auto w-fit">
                        <Activity className="w-6 h-6 text-white" />
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gradient-to-br from-indigo-900/60 to-purple-900/40 rounded-xl p-4 flex items-center gap-8">
                  <span className="text-gray-400 text-xs">0%</span>
                  <div className="text-center">
                    <div className="text-3xl font-bold">95%</div>
                    <div className="text-gray-400 text-xs">Based on likes</div>
                  </div>
                  <span className="text-gray-400 text-xs">100%</span>
                </div>
              </div>
            </div>
          </div>

          {/* Charts Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
            {/* Sales Overview */}
            <div className="bg-gradient-to-br from-indigo-900/40 to-purple-900/20 backdrop-blur-xl rounded-2xl p-6 border border-white/10">
              <div className="mb-6">
                <h3 className="text-lg font-bold mb-1">Sales Overview</h3>
                <p className="text-sm text-gray-400">
                  <span className="text-green-400 font-semibold">(+5%) more</span> in 2021
                </p>
              </div>
              <ResponsiveContainer width="100%" height={250}>
                <LineChart data={lineChartData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                  <XAxis dataKey="month" stroke="#9CA3AF" />
                  <YAxis stroke="#9CA3AF" />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: '#1F2937',
                      border: '1px solid rgba(255,255,255,0.1)',
                      borderRadius: '8px'
                    }}
                  />
                  <Line type="monotone" dataKey="mobile" stroke="#2CD9FF" strokeWidth={2} />
                  <Line type="monotone" dataKey="websites" stroke="#582CFF" strokeWidth={2} />
                </LineChart>
              </ResponsiveContainer>
            </div>

            {/* Active Users */}
            <div className="bg-gradient-to-br from-indigo-900/40 to-purple-900/20 backdrop-blur-xl rounded-2xl p-6 border border-white/10">
              <div className="bg-gradient-to-br from-indigo-900/60 to-purple-900/40 rounded-2xl p-4 mb-6">
                <ResponsiveContainer width="100%" height={200}>
                  <BarChart data={barChartData}>
                    <XAxis dataKey="month" stroke="#9CA3AF" />
                    <YAxis stroke="#9CA3AF" />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: '#1F2937',
                        border: '1px solid rgba(255,255,255,0.1)',
                        borderRadius: '8px'
                      }}
                    />
                    <Bar dataKey="value" radius={[8, 8, 0, 0]}>
                      {barChartData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill="#582CFF" />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>
              
              <div className="mb-4">
                <h3 className="text-lg font-bold mb-1">Active Users</h3>
                <p className="text-sm text-gray-400">
                  <span className="text-green-400 font-semibold">(+23%)</span> than last week
                </p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { label: 'Users', value: '32,984', progress: 20 },
                  { label: 'Clicks', value: '2.42m', progress: 90 },
                  { label: 'Sales', value: '$2,400', progress: 30 },
                  { label: 'Items', value: '320', progress: 50 }
                ].map((stat, idx) => (
                  <div key={idx}>
                    <div className="flex items-center gap-2 mb-2">
                      <div className="bg-purple-500 p-1.5 rounded">
                        <Zap className="w-3 h-3 text-white" />
                      </div>
                      <span className="text-xs text-gray-400">{stat.label}</span>
                    </div>
                    <div className="text-lg font-bold mb-2">{stat.value}</div>
                    <ProgressBar value={stat.progress} />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Projects and Timeline */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Projects Table */}
            <div className="lg:col-span-2 bg-gradient-to-br from-indigo-900/40 to-purple-900/20 backdrop-blur-xl rounded-2xl p-6 border border-white/10">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-lg font-bold mb-1">Projects</h3>
                  <div className="flex items-center gap-2 text-sm text-gray-400">
                    <CheckCircle className="w-4 h-4 text-teal-400" />
                    <span><strong>30 done</strong> this month</span>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                {projects.map((project, idx) => (
                  <div key={idx} className="flex items-center gap-4 pb-4 border-b border-white/5 last:border-0">
                    <div className="bg-purple-500/20 p-3 rounded-xl">
                      <Package className="w-5 h-5 text-purple-400" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-medium mb-1 truncate">{project.name}</h4>
                      <div className="flex items-center gap-4 text-sm text-gray-400">
                        <span>{project.members} members</span>
                        <span className="font-semibold text-white">{project.budget}</span>
                      </div>
                    </div>
                    <div className="text-right min-w-[100px]">
                      <div className="text-sm font-semibold mb-2">{project.completion}%</div>
                      <ProgressBar value={project.completion} />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Orders Overview */}
            <div className="bg-gradient-to-br from-indigo-900/40 to-purple-900/20 backdrop-blur-xl rounded-2xl p-6 border border-white/10">
              <div className="mb-6">
                <h3 className="text-lg font-bold mb-1">Orders Overview</h3>
                <div className="flex items-center gap-2 text-sm text-gray-400">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span><strong>+30%</strong> this month</span>
                </div>
              </div>

              <div className="space-y-4">
                {timeline.map((item, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div className="relative">
                      <div
                        className="p-2 rounded-lg"
                        style={{ backgroundColor: `${item.color}20` }}
                      >
                        <item.icon className="w-4 h-4" style={{ color: item.color }} />
                      </div>
                      {idx < timeline.length - 1 && (
                        <div className="absolute left-1/2 top-full h-4 w-0.5 bg-white/10 -translate-x-1/2" />
                      )}
                    </div>
                    <div className="flex-1 pb-4">
                      <h4 className="font-medium text-sm mb-1">{item.title}</h4>
                      <p className="text-xs text-gray-400">{item.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisionDashboard;