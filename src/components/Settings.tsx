import React, { useState } from 'react';
import { User, Shield, CreditCard, Bell, Globe, Eye, EyeOff, Check } from 'lucide-react';

const Settings: React.FC = () => {
  const [activeSection, setActiveSection] = useState('profile');
  const [showPassword, setShowPassword] = useState(false);
  const [notifications, setNotifications] = useState({
    email: true,
    push: true,
    sms: false,
    marketing: true,
  });

  const settingSections = [
    { id: 'profile', label: 'Profile', icon: User },
    { id: 'privacy', label: 'Privacy & Security', icon: Shield },
    { id: 'payment', label: 'Payment Methods', icon: CreditCard },
    { id: 'subscription', label: 'Subscription', icon: Bell },
    { id: 'notifications', label: 'Notifications', icon: Bell },
  ];

  const paymentMethods = [
    {
      id: 1,
      type: 'Visa',
      last4: '4242',
      expiry: '12/25',
      isDefault: true,
    },
    {
      id: 2,
      type: 'Mastercard',
      last4: '8888',
      expiry: '08/26',
      isDefault: false,
    },
  ];

  const renderProfileSection = () => (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold text-neutral-800 dark:text-white mb-4 transition-colors duration-300">Personal Information</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-200 mb-2 transition-colors duration-300">First Name</label>
            <input
              type="text"
              defaultValue="Sarah"
              className="w-full px-3 py-2 border border-neutral-300 dark:border-neutral-500 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-neutral-700 text-neutral-900 dark:text-white transition-colors duration-300"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-200 mb-2 transition-colors duration-300">Last Name</label>
            <input
              type="text"
              defaultValue="Johnson"
              className="w-full px-3 py-2 border border-neutral-300 dark:border-neutral-500 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-neutral-700 text-neutral-900 dark:text-white transition-colors duration-300"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-200 mb-2 transition-colors duration-300">Email Address</label>
            <input
              type="email"
              defaultValue="sarah.johnson@email.com"
              className="w-full px-3 py-2 border border-neutral-300 dark:border-neutral-500 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-neutral-700 text-neutral-900 dark:text-white transition-colors duration-300"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-200 mb-2 transition-colors duration-300">Phone Number</label>
            <input
              type="tel"
              defaultValue="+1 (555) 123-4567"
              className="w-full px-3 py-2 border border-neutral-300 dark:border-neutral-500 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-neutral-700 text-neutral-900 dark:text-white transition-colors duration-300"
            />
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold text-neutral-800 dark:text-white mb-4 transition-colors duration-300">Professional Information</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-200 mb-2 transition-colors duration-300">Title</label>
            <input
              type="text"
              defaultValue="Mathematics Educator"
              className="w-full px-3 py-2 border border-neutral-300 dark:border-neutral-500 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-neutral-700 text-neutral-900 dark:text-white transition-colors duration-300"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-200 mb-2 transition-colors duration-300">Institution</label>
            <input
              type="text"
              defaultValue="Independent Educator"
              className="w-full px-3 py-2 border border-neutral-300 dark:border-neutral-500 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-neutral-700 text-neutral-900 dark:text-white transition-colors duration-300"
            />
          </div>
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-200 mb-2 transition-colors duration-300">Bio</label>
            <textarea
              rows={4}
              defaultValue="Passionate mathematics educator with over 8 years of experience helping students excel in algebra, calculus, and statistics."
              className="w-full px-3 py-2 border border-neutral-300 dark:border-neutral-500 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-neutral-700 text-neutral-900 dark:text-white transition-colors duration-300"
            />
          </div>
        </div>
      </div>

      <div className="flex justify-end">
        <button className="px-6 py-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-all duration-200">
          Save Changes
        </button>
      </div>
    </div>
  );

  const renderPrivacySection = () => (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold text-neutral-800 dark:text-white mb-4 transition-colors duration-300">Change Password</h3>
        <div className="space-y-4 max-w-md">
          <div>
            <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-200 mb-2 transition-colors duration-300">Current Password</label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                className="w-full px-3 py-2 pr-10 border border-neutral-300 dark:border-neutral-500 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-neutral-700 text-neutral-900 dark:text-white transition-colors duration-300"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-neutral-500 dark:text-neutral-400"
              >
                {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-200 mb-2 transition-colors duration-300">New Password</label>
            <input
              type="password"
              className="w-full px-3 py-2 border border-neutral-300 dark:border-neutral-500 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-neutral-700 text-neutral-900 dark:text-white transition-colors duration-300"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-200 mb-2 transition-colors duration-300">Confirm New Password</label>
            <input
              type="password"
              className="w-full px-3 py-2 border border-neutral-300 dark:border-neutral-500 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-neutral-700 text-neutral-900 dark:text-white transition-colors duration-300"
            />
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold text-neutral-800 dark:text-white mb-4 transition-colors duration-300">Two-Factor Authentication</h3>
        <div className="p-4 bg-success-50 dark:bg-success-900/20 border border-success-200 dark:border-success-700 rounded-lg transition-colors duration-300">
          <div className="flex items-center space-x-3">
            <Check className="w-5 h-5 text-success-600 dark:text-success-400" />
            <div>
              <p className="font-medium text-success-800 dark:text-success-300 transition-colors duration-300">Two-factor authentication is enabled</p>
              <p className="text-sm text-success-700 dark:text-success-400 transition-colors duration-300">Your account is protected with SMS verification</p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold text-neutral-800 dark:text-white mb-4 transition-colors duration-300">Privacy Settings</h3>
        <div className="space-y-4">
          <div className="flex items-center justify-between p-4 border border-neutral-200 dark:border-neutral-600 rounded-lg transition-colors duration-300">
            <div>
              <p className="font-medium text-neutral-800 dark:text-white transition-colors duration-300">Profile Visibility</p>
              <p className="text-sm text-neutral-600 dark:text-neutral-300 transition-colors duration-300">Control who can see your profile information</p>
            </div>
            <select className="px-3 py-1 border border-neutral-300 dark:border-neutral-500 rounded-lg text-sm bg-white dark:bg-neutral-700 text-neutral-900 dark:text-white transition-colors duration-300">
              <option>Public</option>
              <option>Students Only</option>
              <option>Private</option>
            </select>
          </div>
          <div className="flex items-center justify-between p-4 border border-neutral-200 dark:border-neutral-600 rounded-lg transition-colors duration-300">
            <div>
              <p className="font-medium text-neutral-800 dark:text-white transition-colors duration-300">Data Analytics</p>
              <p className="text-sm text-neutral-600 dark:text-neutral-300 transition-colors duration-300">Allow EdTechAI to use your data for analytics</p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" defaultChecked className="sr-only peer" />
              <div className="w-11 h-6 bg-neutral-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-neutral-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-600"></div>
            </label>
          </div>
        </div>
      </div>
    </div>
  );

  const renderPaymentSection = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-neutral-800 dark:text-white transition-colors duration-300">Payment Methods</h3>
        <button className="px-4 py-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-all duration-200">
          Add New Card
        </button>
      </div>

      <div className="space-y-4">
        {paymentMethods.map((method) => (
          <div key={method.id} className="border border-neutral-200 dark:border-neutral-600 rounded-lg p-4 transition-colors duration-300">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-8 bg-primary-100 dark:bg-primary-900/30 rounded flex items-center justify-center transition-colors duration-300">
                  <CreditCard className="w-5 h-5 text-primary-600 dark:text-primary-400" />
                </div>
                <div>
                  <p className="font-medium text-neutral-800 dark:text-white transition-colors duration-300">
                    {method.type} ending in {method.last4}
                  </p>
                  <p className="text-sm text-neutral-600 dark:text-neutral-300 transition-colors duration-300">Expires {method.expiry}</p>
                </div>
                {method.isDefault && (
                  <span className="px-2 py-1 bg-success-100 dark:bg-success-900/30 text-success-700 dark:text-success-300 text-xs font-medium rounded-full transition-colors duration-300">
                    Default
                  </span>
                )}
              </div>
              <div className="flex items-center space-x-2">
                <button className="px-3 py-1 text-sm text-neutral-600 dark:text-neutral-300 hover:text-neutral-800 dark:hover:text-neutral-100 transition-colors duration-300">
                  Edit
                </button>
                <button className="px-3 py-1 text-sm text-red-600 dark:text-red-400 hover:text-red-800 dark:hover:text-red-300 transition-colors duration-300">
                  Remove
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div>
        <h3 className="text-lg font-semibold text-neutral-800 dark:text-white mb-4 transition-colors duration-300">Billing Information</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-200 mb-2 transition-colors duration-300">Billing Address</label>
            <input
              type="text"
              defaultValue="123 Main Street"
              className="w-full px-3 py-2 border border-neutral-300 dark:border-neutral-500 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-neutral-700 text-neutral-900 dark:text-white transition-colors duration-300"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-200 mb-2 transition-colors duration-300">City</label>
            <input
              type="text"
              defaultValue="San Francisco"
              className="w-full px-3 py-2 border border-neutral-300 dark:border-neutral-500 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-neutral-700 text-neutral-900 dark:text-white transition-colors duration-300"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-200 mb-2 transition-colors duration-300">State</label>
            <input
              type="text"
              defaultValue="CA"
              className="w-full px-3 py-2 border border-neutral-300 dark:border-neutral-500 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-neutral-700 text-neutral-900 dark:text-white transition-colors duration-300"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-200 mb-2 transition-colors duration-300">ZIP Code</label>
            <input
              type="text"
              defaultValue="94105"
              className="w-full px-3 py-2 border border-neutral-300 dark:border-neutral-500 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-neutral-700 text-neutral-900 dark:text-white transition-colors duration-300"
            />
          </div>
        </div>
      </div>
    </div>
  );

  const renderSubscriptionSection = () => (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold text-neutral-800 dark:text-white mb-4 transition-colors duration-300">Current Plan</h3>
        <div className="border border-primary-200 dark:border-primary-700 bg-primary-50 dark:bg-primary-900/20 rounded-lg p-6 transition-colors duration-300">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h4 className="text-xl font-bold text-primary-800 dark:text-primary-300 transition-colors duration-300">Professional Plan</h4>
              <p className="text-primary-700 dark:text-primary-400 transition-colors duration-300">Perfect for growing educators</p>
            </div>
            <div className="text-right">
              <p className="text-2xl font-bold text-primary-800 dark:text-primary-300 transition-colors duration-300">$49</p>
              <p className="text-sm text-primary-600 dark:text-primary-400 transition-colors duration-300">per month</p>
            </div>
          </div>
          <div className="space-y-2 text-sm text-primary-700 dark:text-primary-400 transition-colors duration-300">
            <div className="flex items-center space-x-2">
              <Check className="w-4 h-4" />
              <span>Unlimited students</span>
            </div>
            <div className="flex items-center space-x-2">
              <Check className="w-4 h-4" />
              <span>Advanced analytics</span>
            </div>
            <div className="flex items-center space-x-2">
              <Check className="w-4 h-4" />
              <span>AI-powered insights</span>
            </div>
            <div className="flex items-center space-x-2">
              <Check className="w-4 h-4" />
              <span>Priority support</span>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold text-neutral-800 dark:text-white mb-4 transition-colors duration-300">Billing History</h3>
        <div className="space-y-3">
          {[
            { date: 'Jan 15, 2024', amount: '$49.00', status: 'Paid' },
            { date: 'Dec 15, 2023', amount: '$49.00', status: 'Paid' },
            { date: 'Nov 15, 2023', amount: '$49.00', status: 'Paid' },
          ].map((bill, index) => (
            <div key={index} className="flex items-center justify-between p-4 border border-neutral-200 dark:border-neutral-600 rounded-lg transition-colors duration-300">
              <div>
                <p className="font-medium text-neutral-800 dark:text-white transition-colors duration-300">{bill.date}</p>
                <p className="text-sm text-neutral-600 dark:text-neutral-300 transition-colors duration-300">Professional Plan</p>
              </div>
              <div className="text-right">
                <p className="font-medium text-neutral-800 dark:text-white transition-colors duration-300">{bill.amount}</p>
                <span className="px-2 py-1 bg-success-100 dark:bg-success-900/30 text-success-700 dark:text-success-300 text-xs font-medium rounded-full transition-colors duration-300">
                  {bill.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex space-x-4">
        <button className="px-4 py-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-all duration-200">
          Upgrade Plan
        </button>
        <button className="px-4 py-2 border border-neutral-300 dark:border-neutral-500 text-neutral-700 dark:text-neutral-200 rounded-lg hover:bg-neutral-50 dark:hover:bg-neutral-700 transition-all duration-200">
          Cancel Subscription
        </button>
      </div>
    </div>
  );

  const renderNotificationsSection = () => (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold text-neutral-800 dark:text-white mb-4 transition-colors duration-300">Notification Preferences</h3>
        <div className="space-y-4">
          {[
            { key: 'email', label: 'Email Notifications', description: 'Receive updates via email' },
            { key: 'push', label: 'Push Notifications', description: 'Browser and mobile notifications' },
            { key: 'sms', label: 'SMS Notifications', description: 'Text message alerts' },
            { key: 'marketing', label: 'Marketing Communications', description: 'Product updates and tips' },
          ].map((notification) => (
            <div key={notification.key} className="flex items-center justify-between p-4 border border-neutral-200 dark:border-neutral-600 rounded-lg transition-colors duration-300">
              <div>
                <p className="font-medium text-neutral-800 dark:text-white transition-colors duration-300">{notification.label}</p>
                <p className="text-sm text-neutral-600 dark:text-neutral-300 transition-colors duration-300">{notification.description}</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={notifications[notification.key as keyof typeof notifications]}
                  onChange={(e) => setNotifications(prev => ({
                    ...prev,
                    [notification.key]: e.target.checked
                  }))}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-neutral-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-neutral-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-600"></div>
              </label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderContent = () => {
    switch (activeSection) {
      case 'profile': return renderProfileSection();
      case 'privacy': return renderPrivacySection();
      case 'payment': return renderPaymentSection();
      case 'subscription': return renderSubscriptionSection();
      case 'notifications': return renderNotificationsSection();
      default: return renderProfileSection();
    }
  };

  return (
    <div className="p-6">
      <div className="mb-6">
        <h2 className="text-3xl font-bold text-neutral-800 dark:text-white transition-colors duration-300">Settings</h2>
        <p className="text-neutral-600 dark:text-neutral-300 mt-1 transition-colors duration-300">Manage your account preferences and settings</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Settings Navigation */}
        <div className="lg:col-span-1">
          <div className="bg-white dark:bg-neutral-800 rounded-xl border border-neutral-200 dark:border-neutral-600 p-4 transition-colors duration-300">
            <nav className="space-y-2">
              {settingSections.map((section) => {
                const Icon = section.icon;
                return (
                  <button
                    key={section.id}
                    onClick={() => setActiveSection(section.id)}
                    className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-left transition-all duration-200 ${
                      activeSection === section.id
                        ? 'bg-primary-50 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 border border-primary-200 dark:border-primary-700'
                        : 'hover:bg-neutral-50 dark:hover:bg-neutral-700 text-neutral-700 dark:text-neutral-200'
                    }`}
                  >
                    <Icon className={`w-5 h-5 ${
                      activeSection === section.id ? 'text-primary-600 dark:text-primary-400' : 'text-neutral-500 dark:text-neutral-400'
                    } transition-colors duration-300`} />
                    <span className="font-medium">{section.label}</span>
                  </button>
                );
              })}
            </nav>
          </div>
        </div>

        {/* Settings Content */}
        <div className="lg:col-span-3">
          <div className="bg-white dark:bg-neutral-800 rounded-xl border border-neutral-200 dark:border-neutral-600 p-6 transition-colors duration-300">
            {renderContent()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;