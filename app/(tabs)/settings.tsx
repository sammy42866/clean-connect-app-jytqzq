
import React from 'react';
import { View, Text, StyleSheet, ScrollView, Switch } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { colors, textStyles, commonStyles } from '@/styles/commonStyles';
import { CustomButton } from '@/components/CustomButton';

export default function SettingsScreen() {
  const [notificationsEnabled, setNotificationsEnabled] = React.useState(true);
  const [maintenanceMode, setMaintenanceMode] = React.useState(false);
  const [autoApproval, setAutoApproval] = React.useState(false);

  return (
    <SafeAreaView style={commonStyles.safeArea}>
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <Text style={textStyles.title}>System Settings</Text>
          <Text style={textStyles.bodySecondary}>
            Configure platform-wide settings
          </Text>
        </View>

        <View style={styles.content}>
          <View style={[commonStyles.card, styles.section]}>
            <Text style={[textStyles.subtitle, styles.sectionTitle]}>Platform Controls</Text>
            
            <View style={styles.settingRow}>
              <View style={styles.settingInfo}>
                <Text style={textStyles.body}>Maintenance Mode</Text>
                <Text style={textStyles.caption}>Temporarily disable user access</Text>
              </View>
              <Switch
                value={maintenanceMode}
                onValueChange={setMaintenanceMode}
                trackColor={{ false: colors.border, true: colors.primary }}
                thumbColor={colors.card}
              />
            </View>
            
            <View style={styles.settingRow}>
              <View style={styles.settingInfo}>
                <Text style={textStyles.body}>Auto-approve Businesses</Text>
                <Text style={textStyles.caption}>Automatically approve new business registrations</Text>
              </View>
              <Switch
                value={autoApproval}
                onValueChange={setAutoApproval}
                trackColor={{ false: colors.border, true: colors.primary }}
                thumbColor={colors.card}
              />
            </View>
            
            <View style={styles.settingRow}>
              <View style={styles.settingInfo}>
                <Text style={textStyles.body}>System Notifications</Text>
                <Text style={textStyles.caption}>Enable admin notifications</Text>
              </View>
              <Switch
                value={notificationsEnabled}
                onValueChange={setNotificationsEnabled}
                trackColor={{ false: colors.border, true: colors.primary }}
                thumbColor={colors.card}
              />
            </View>
          </View>

          <View style={[commonStyles.card, styles.section]}>
            <Text style={[textStyles.subtitle, styles.sectionTitle]}>System Information</Text>
            
            <View style={styles.infoRow}>
              <Text style={textStyles.body}>Platform Version</Text>
              <Text style={textStyles.bodySecondary}>v1.0.0</Text>
            </View>
            
            <View style={styles.infoRow}>
              <Text style={textStyles.body}>Total Users</Text>
              <Text style={textStyles.bodySecondary}>1,247</Text>
            </View>
            
            <View style={styles.infoRow}>
              <Text style={textStyles.body}>Active Businesses</Text>
              <Text style={textStyles.bodySecondary}>156</Text>
            </View>
            
            <View style={styles.infoRow}>
              <Text style={textStyles.body}>System Uptime</Text>
              <Text style={textStyles.bodySecondary}>99.9%</Text>
            </View>
          </View>

          <View style={[commonStyles.card, styles.section]}>
            <Text style={[textStyles.subtitle, styles.sectionTitle]}>Actions</Text>
            
            <CustomButton
              title="Export User Data"
              onPress={() => console.log('Export user data')}
              variant="outline"
              style={styles.actionButton}
            />
            
            <CustomButton
              title="Generate Reports"
              onPress={() => console.log('Generate reports')}
              variant="outline"
              style={styles.actionButton}
            />
            
            <CustomButton
              title="System Backup"
              onPress={() => console.log('System backup')}
              variant="accent"
              style={styles.actionButton}
            />
            
            <CustomButton
              title="Clear Cache"
              onPress={() => console.log('Clear cache')}
              variant="secondary"
              style={styles.actionButton}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  header: {
    padding: 20,
    alignItems: 'center',
  },
  content: {
    padding: 20,
    paddingTop: 0,
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    marginBottom: 16,
  },
  settingRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  settingInfo: {
    flex: 1,
    marginRight: 16,
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 8,
  },
  actionButton: {
    marginVertical: 6,
  },
});
