"use client";

import React from 'react';

interface LoadingProps {
  message?: string;
  fullScreen?: boolean;
  size?: 'small' | 'medium' | 'large';
}

export default function Loading({ 
  message = 'Loading...', 
  fullScreen = false,
  size = 'medium'
}: LoadingProps) {
  const sizeMap = {
    small: { spinner: '40px', border: '3px' },
    medium: { spinner: '60px', border: '4px' },
    large: { spinner: '80px', border: '5px' }
  };

  const { spinner: spinnerSize, border: borderWidth } = sizeMap[size];

  const containerStyle: React.CSSProperties = fullScreen
    ? {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(255, 255, 255, 0.95)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        gap: '20px',
        zIndex: 9999,
        backdropFilter: 'blur(4px)',
      }
    : {
        minHeight: '400px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        gap: '20px',
        padding: '40px 20px',
      };

  return (
    <>
      <div style={containerStyle}>
        <div
          style={{
            width: spinnerSize,
            height: spinnerSize,
            border: `${borderWidth} solid #f3f3f3`,
            borderTop: `${borderWidth} solid #667eea`,
            borderRadius: '50%',
            animation: 'spin 1s linear infinite',
          }}
        />
        {message && (
          <p style={{ 
            color: '#666', 
            fontSize: size === 'small' ? '14px' : size === 'large' ? '20px' : '18px',
            margin: 0,
            fontWeight: 500
          }}>
            {message}
          </p>
        )}
      </div>
      <style jsx>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </>
  );
}

