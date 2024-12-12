import React, { useEffect, useState } from 'react';
import { ScrollView, TouchableOpacity, StyleSheet, Text, View } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import DeviceInfo from 'react-native-device-info';
import { RootStackParamList } from '../App';

type Props = StackScreenProps<RootStackParamList, 'DeviceInfo'>;

const DeviceInfoScreen: React.FC<Props> = ({ navigation }) => {
  const [deviceInfo, setDeviceInfo] = useState<{ [key: string]: string }>({});

  useEffect(() => {
    const fetchDeviceInfo = async () => {
      try {
        const info: { [key: string]: string } = {
          // General Information
          ApplicationName: DeviceInfo.getApplicationName(),
          AndroidId: await DeviceInfo.getAndroidId(),
          Brand: await DeviceInfo.getBrand(),
          BuildNumber: DeviceInfo.getBuildNumber(),
          BundleId: DeviceInfo.getBundleId(),
          DeviceId: DeviceInfo.getDeviceId(),
          DeviceType: DeviceInfo.getDeviceType(),
          Manufacturer: await DeviceInfo.getManufacturer(),
          Model: await DeviceInfo.getModel(),
          ReadableVersion: DeviceInfo.getReadableVersion(),
          SystemName: await DeviceInfo.getSystemName(),
          SystemVersion: await DeviceInfo.getSystemVersion(),
          Version: DeviceInfo.getVersion(),
          Supported32BitAbis: (await DeviceInfo.supported32BitAbis()).join(', '),
          Supported64BitAbis: (await DeviceInfo.supported64BitAbis()).join(', '),
          SupportedAbis: (await DeviceInfo.supportedAbis()).join(', '),

          // Android Specific
          ApiLevel: (await DeviceInfo.getApiLevel()).toString(),
          BatteryLevel: `${Math.round((await DeviceInfo.getBatteryLevel()) * 100)}%`,
          BuildId: await DeviceInfo.getBuildId(),
          Carrier: (await DeviceInfo.getCarrier()) || 'N/A',
          Codename: await DeviceInfo.getCodename(),
          Device: await DeviceInfo.getDevice(),
          DeviceName: await DeviceInfo.getDeviceName(),
          Display: await DeviceInfo.getDisplay(),
          Fingerprint: await DeviceInfo.getFingerprint(),
          FirstInstallTime: new Date(await DeviceInfo.getFirstInstallTime()).toLocaleString(),
          FontScale: (await DeviceInfo.getFontScale()).toString(),
          FreeDiskStorage: `${(await DeviceInfo.getFreeDiskStorage() / (1024 * 1024)).toFixed(2)} MB`,
          FreeDiskStorageOld: `${(await DeviceInfo.getFreeDiskStorageOld() / (1024 * 1024)).toFixed(2)} MB`,
          Hardware: await DeviceInfo.getHardware(),
          Host: await DeviceInfo.getHost(),
          Incremental: await DeviceInfo.getIncremental(),
          InstallReferrer: (await DeviceInfo.getInstallReferrer()) || 'N/A',
          InstanceId: (await DeviceInfo.getInstanceId()) || 'N/A',
          LastUpdateTime: new Date(await DeviceInfo.getLastUpdateTime()).toLocaleString(),
          MaxMemory: `${(await DeviceInfo.getMaxMemory() / (1024 * 1024)).toFixed(2)} MB`,
          PreviewSdkInt: (await DeviceInfo.getPreviewSdkInt()).toString(),
          Product: await DeviceInfo.getProduct(),
          SecurityPatch: (await DeviceInfo.getSecurityPatch()) || 'N/A',
          StartupTime: `${await DeviceInfo.getStartupTime()} ms`,
          SystemAvailableFeatures: (await DeviceInfo.getSystemAvailableFeatures()).join(', '),
          Tags: await DeviceInfo.getTags(),
          TotalDiskCapacity: `${(await DeviceInfo.getTotalDiskCapacity() / (1024 * 1024)).toFixed(2)} MB`,
          TotalDiskCapacityOld: `${(await DeviceInfo.getTotalDiskCapacityOld() / (1024 * 1024)).toFixed(2)} MB`,
          TotalMemory: `${(await DeviceInfo.getTotalMemory() / (1024 * 1024)).toFixed(2)} MB`,
          Type: await DeviceInfo.getType(),
          UniqueId: await DeviceInfo.getUniqueId(),
          UsedMemory: `${(await DeviceInfo.getUsedMemory() / (1024 * 1024)).toFixed(2)} MB`,
          UserAgent: (await DeviceInfo.getUserAgent()) || 'N/A',
          Brightness: `${(await DeviceInfo.getBrightness() * 100).toFixed(0)}%`,
          SupportedMediaTypeList: (await DeviceInfo.getSupportedMediaTypeList())?.join(', ') || 'N/A',
        };
        setDeviceInfo(info);
      } catch (error) {
        console.error('Error fetching device info:', error);
      }
    }

    fetchDeviceInfo();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.scrollViewHight}>
        <ScrollView contentContainerStyle={styles.scrollContent}>
          {Object.entries(deviceInfo).map(([key, value]) => (
            <Text key={key} style={styles.infoText}>
              {key}: {value}
            </Text>
          ))}
        </ScrollView>
      </View>
      <TouchableOpacity style={styles.uploadButton}>
        <Text style={styles.uploadButtonText}>Upload</Text>
      </TouchableOpacity>
    </View>
  );
};

export default DeviceInfoScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  scrollViewHight: {
    paddingBottom: 85,
  },
  scrollContent: {
    padding: 20,
  },
  infoText: {
    fontSize: 16,
    color: '#333',
    marginBottom: 10,
  },
  uploadButton: {
    position: 'absolute',
    bottom: 20,
    left: '50%',
    transform: [{ translateX: -53 }], // Center the button horizontally
    backgroundColor: '#4CAF50',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    elevation: 3,
  },
  uploadButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFFFFF',
    textAlign: 'center',
  },
});
