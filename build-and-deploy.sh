#!/bin/bash

# See: https://github.com/expo/eas-cli
echo "TODO: Build and deploy with the EAS CLI"
aws sts get-caller-identity
echo "EXPO_TOKEN = $EXPO_TOKEN"
# aws secretsmanager get-secret-value --secret-id expo-token
# eas build -p all --non-interactive