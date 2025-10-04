
import { StyleSheet, ViewStyle, TextStyle } from 'react-native';

export const colors = {
  // Primary palette - soothing blues and gentle greens
  background: '#F8FAFB',        // Very light blue-gray for clean feel
  backgroundSecondary: '#F0F4F7', // Slightly darker for cards
  text: '#2C3E50',              // Deep blue-gray for readability
  textSecondary: '#7B8794',     // Medium blue-gray for secondary text
  textLight: '#A8B5C1',         // Light blue-gray for subtle text
  
  // Brand colors - water drop and cleanliness theme
  primary: '#4A90E2',           // Soft blue (water drop)
  primaryLight: '#E3F2FD',      // Very light blue for backgrounds
  primaryDark: '#2E5BBA',       // Darker blue for pressed states
  
  secondary: '#52C4A0',         // Gentle green (cleanliness)
  secondaryLight: '#E8F5F0',    // Very light green for backgrounds
  secondaryDark: '#3A9B7A',     // Darker green for pressed states
  
  // Neutral tones
  neutral: '#95A5A6',           // Soft gray
  neutralLight: '#ECF0F1',      // Very light gray
  neutralDark: '#34495E',       // Dark gray
  
  // Functional colors
  card: '#FFFFFF',              // Pure white for cards
  border: '#E1E8ED',            // Light blue-gray for borders
  shadow: 'rgba(44, 62, 80, 0.08)', // Subtle shadow
  
  // Status colors (muted to match theme)
  success: '#52C4A0',           // Same as secondary green
  warning: '#F39C12',           // Muted orange
  error: '#E74C3C',             // Muted red
  info: '#4A90E2',              // Same as primary blue
  
  // Admin theme - darker, tech-inspired
  adminBackground: '#1A1D23',   // Dark background
  adminCard: '#2C3E50',         // Dark blue-gray cards
  adminText: '#ECF0F1',         // Light text
  adminAccent: '#3498DB',       // Bright blue accent
};

export const buttonStyles = StyleSheet.create({
  primary: {
    backgroundColor: colors.primary,
    paddingVertical: 16,
    paddingHorizontal: 24,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: `0px 4px 12px ${colors.shadow}`,
    elevation: 4,
  },
  secondary: {
    backgroundColor: colors.secondary,
    paddingVertical: 16,
    paddingHorizontal: 24,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: `0px 4px 12px ${colors.shadow}`,
    elevation: 4,
  },
  outline: {
    backgroundColor: 'transparent',
    borderWidth: 2,
    borderColor: colors.primary,
    paddingVertical: 14,
    paddingHorizontal: 24,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  ghost: {
    backgroundColor: colors.primaryLight,
    paddingVertical: 16,
    paddingHorizontal: 24,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  large: {
    paddingVertical: 20,
    paddingHorizontal: 32,
    borderRadius: 16,
  },
});

export const textStyles = StyleSheet.create({
  title: {
    fontSize: 32,
    fontWeight: '700',
    color: colors.text,
    textAlign: 'center',
    marginBottom: 8,
    letterSpacing: -0.5,
  },
  subtitle: {
    fontSize: 22,
    fontWeight: '600',
    color: colors.text,
    marginBottom: 8,
    letterSpacing: -0.3,
  },
  heading: {
    fontSize: 18,
    fontWeight: '600',
    color: colors.text,
    marginBottom: 4,
  },
  body: {
    fontSize: 16,
    color: colors.text,
    lineHeight: 24,
  },
  bodySecondary: {
    fontSize: 16,
    color: colors.textSecondary,
    lineHeight: 24,
  },
  caption: {
    fontSize: 14,
    color: colors.textSecondary,
    lineHeight: 20,
  },
  small: {
    fontSize: 12,
    color: colors.textLight,
    lineHeight: 16,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.card,
  },
  buttonTextOutline: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.primary,
  },
  buttonTextLarge: {
    fontSize: 18,
    fontWeight: '600',
    color: colors.card,
  },
});

export const commonStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  safeArea: {
    flex: 1,
    backgroundColor: colors.background,
  },
  content: {
    flex: 1,
    padding: 24,
  },
  centerContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
  },
  card: {
    backgroundColor: colors.card,
    borderRadius: 16,
    padding: 20,
    marginVertical: 8,
    boxShadow: `0px 4px 16px ${colors.shadow}`,
    elevation: 4,
    borderWidth: 1,
    borderColor: colors.border,
  },
  cardSmall: {
    backgroundColor: colors.card,
    borderRadius: 12,
    padding: 16,
    marginVertical: 6,
    boxShadow: `0px 2px 8px ${colors.shadow}`,
    elevation: 2,
    borderWidth: 1,
    borderColor: colors.border,
  },
  input: {
    backgroundColor: colors.card,
    borderWidth: 2,
    borderColor: colors.border,
    borderRadius: 12,
    paddingVertical: 16,
    paddingHorizontal: 20,
    fontSize: 16,
    color: colors.text,
    marginVertical: 8,
  },
  inputFocused: {
    borderColor: colors.primary,
    boxShadow: `0px 0px 0px 3px ${colors.primaryLight}`,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  spaceBetween: {
    justifyContent: 'space-between',
  },
  shadow: {
    boxShadow: `0px 4px 16px ${colors.shadow}`,
    elevation: 4,
  },
  divider: {
    height: 1,
    backgroundColor: colors.border,
    marginVertical: 16,
  },
  // Admin styles
  adminContainer: {
    flex: 1,
    backgroundColor: colors.adminBackground,
  },
  adminCard: {
    backgroundColor: colors.adminCard,
    borderRadius: 12,
    padding: 20,
    marginVertical: 8,
    borderWidth: 1,
    borderColor: colors.neutralDark,
  },
  adminText: {
    color: colors.adminText,
  },
});
