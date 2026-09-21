/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { PageType } from './types';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { ReservationModal } from './components/ReservationModal';
import { AccueilPage } from './pages/AccueilPage';
import { ChambresPage } from './pages/ChambresPage';
import { RestaurantPage } from './pages/RestaurantPage';
import { ServicesPage } from './pages/ServicesPage';
import { GaleriePage } from './pages/GaleriePage';
import { ContactPage } from './pages/ContactPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageType>('accueil');
  const [reservationOpen, setReservationOpen] = useState<boolean>(false);
  const [selectedRoomId, setSelectedRoomId] = useState<string | undefined>(undefined);

  // Scroll to top when page changes
  const handleNavigate = (page: PageType) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenReservation = (roomId?: string) => {
    setSelectedRoomId(roomId);
    setReservationOpen(true);
  };

  const handleCloseReservation = () => {
    setReservationOpen(false);
    setSelectedRoomId(undefined);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#16332c] font-sans antialiased selection:bg-[#1b3d36] selection:text-white">
      {/* Top Header & Navigation */}
      <Navbar
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onOpenReservation={() => handleOpenReservation()}
      />

      {/* Main Page Body */}
      <main className="flex-1">
        {currentPage === 'accueil' && (
          <AccueilPage
            onNavigate={handleNavigate}
            onOpenReservation={handleOpenReservation}
          />
        )}
        {currentPage === 'chambres' && (
          <ChambresPage
            onNavigate={handleNavigate}
            onOpenReservation={handleOpenReservation}
          />
        )}
        {currentPage === 'restaurant' && (
          <RestaurantPage
            onNavigate={handleNavigate}
            onOpenReservation={() => handleOpenReservation()}
          />
        )}
        {currentPage === 'services' && (
          <ServicesPage
            onNavigate={handleNavigate}
            onOpenReservation={() => handleOpenReservation()}
          />
        )}
        {currentPage === 'galerie' && (
          <GaleriePage
            onNavigate={handleNavigate}
            onOpenReservation={() => handleOpenReservation()}
          />
        )}
        {currentPage === 'contact' && (
          <ContactPage
            onNavigate={handleNavigate}
            onOpenReservation={() => handleOpenReservation()}
          />
        )}
      </main>

      {/* Global Footer */}
      <Footer onNavigate={handleNavigate} />

      {/* Global Reservation Modal */}
      <ReservationModal
        isOpen={reservationOpen}
        onClose={handleCloseReservation}
        selectedRoomId={selectedRoomId}
      />
    </div>
  );
}

