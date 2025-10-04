
import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { colors, textStyles, commonStyles } from '@/styles/commonStyles';
import { CustomButton } from '@/components/CustomButton';

export default function MessagesScreen() {
  const mockMessages = [
    {
      id: '1',
      from: 'Manager',
      subject: 'Job Update - House Deep Clean',
      preview: 'The customer has requested additional bathroom cleaning...',
      time: '2 hours ago',
      unread: true,
    },
    {
      id: '2',
      from: 'Alice Brown',
      subject: 'Thank you for the great service!',
      preview: 'Hi John, I wanted to thank you for the excellent cleaning...',
      time: '1 day ago',
      unread: false,
    },
    {
      id: '3',
      from: 'Manager',
      subject: 'Schedule Change',
      preview: 'Your Tuesday appointment has been moved to 2 PM...',
      time: '2 days ago',
      unread: false,
    },
  ];

  return (
    <SafeAreaView style={commonStyles.safeArea}>
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <Text style={textStyles.title}>Messages</Text>
          <Text style={textStyles.bodySecondary}>
            Communicate with managers and customers
          </Text>
        </View>

        <View style={styles.content}>
          {mockMessages.map((message) => (
            <View key={message.id} style={[
              commonStyles.card, 
              styles.messageCard,
              message.unread && styles.unreadCard
            ]}>
              <View style={styles.messageHeader}>
                <View style={styles.messageInfo}>
                  <Text style={[textStyles.body, styles.sender]}>{message.from}</Text>
                  <Text style={textStyles.caption}>{message.time}</Text>
                </View>
                {message.unread && <View style={styles.unreadDot} />}
              </View>
              
              <Text style={[textStyles.subtitle, styles.subject]}>{message.subject}</Text>
              <Text style={[textStyles.bodySecondary, styles.preview]} numberOfLines={2}>
                {message.preview}
              </Text>
              
              <View style={styles.messageActions}>
                <CustomButton
                  title="Reply"
                  onPress={() => console.log('Reply to:', message.subject)}
                  variant="outline"
                  style={styles.actionButton}
                />
                <CustomButton
                  title="View Full"
                  onPress={() => console.log('View message:', message.subject)}
                  style={styles.actionButton}
                />
              </View>
            </View>
          ))}
          
          {mockMessages.length === 0 && (
            <View style={styles.emptyState}>
              <Text style={textStyles.bodySecondary}>No messages yet</Text>
              <Text style={textStyles.caption}>
                Messages from managers and customers will appear here
              </Text>
            </View>
          )}
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
  messageCard: {
    marginBottom: 12,
  },
  unreadCard: {
    borderLeftWidth: 4,
    borderLeftColor: colors.primary,
  },
  messageHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  messageInfo: {
    flex: 1,
  },
  sender: {
    fontWeight: '600',
  },
  unreadDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: colors.primary,
  },
  subject: {
    fontSize: 16,
    marginBottom: 6,
  },
  preview: {
    marginBottom: 12,
    lineHeight: 20,
  },
  messageActions: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  actionButton: {
    paddingVertical: 6,
    paddingHorizontal: 12,
    marginLeft: 8,
  },
  emptyState: {
    alignItems: 'center',
    padding: 40,
  },
});
