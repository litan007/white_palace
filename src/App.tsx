import React, { useState } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { BookingModal } from './components/BookingModal';
import { TableBookingModal } from './components/TableBookingModal';
import { VideoModal } from './components/VideoModal';
import { MenuPdfModal } from './components/MenuPdfModal';

import { HomeView } from './views/HomeView';
import { RoomsView } from './views/RoomsView';
import { RoomDetailView } from './views/RoomDetailView';
import { RestaurantView } from './views/RestaurantView';
import { ExperiencesView } from './views/ExperiencesView';
import { OffersView } from './views/OffersView';
import { GalleryView } from './views/GalleryView';
import { ContactView } from './views/ContactView';
import { AboutView } from './views/AboutView';
import { BlogView } from './views/BlogView';

export default function App() {
  const [currentView, setCurrentView] = useState<string>('home');
  const [selectedRoomId, setSelectedRoomId] = useState<string>('suite-lagon');

  // Modal States
  const [roomBookingOpen, setRoomBookingOpen] = useState(false);
  const [tableBookingOpen, setTableBookingOpen] = useState(false);
  const [videoModalOpen, setVideoModalOpen] = useState(false);
  const [menuPdfModalOpen, setMenuPdfModalOpen] = useState(false);

  // Booking search params
  const [searchParams, setSearchParams] = useState({
    checkIn: '2025-05-25',
    checkOut: '2025-05-28',
    adults: 2,
    children: 0,
    promoCode: ''
  });

  const handleNavigate = (view: string) => {
    setCurrentView(view);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenRoomDetail = (roomId: string) => {
    setSelectedRoomId(roomId);
    setCurrentView('room-detail');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenRoomBooking = (roomId?: string) => {
    if (roomId) {
      setSelectedRoomId(roomId);
    }
    setRoomBookingOpen(true);
  };

  const handleSearchRooms = (params: any) => {
    setSearchParams(params);
    setRoomBookingOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F7FAF8] text-[#233D34] font-sans selection:bg-[#233D34] selection:text-white">
      {/* Navigation Header */}
      <Header
        currentView={currentView}
        onNavigate={handleNavigate}
        onOpenRoomBooking={() => handleOpenRoomBooking()}
        onOpenTableBooking={() => setTableBookingOpen(true)}
      />

      {/* View Content Switcher */}
      <main className="flex-1">
        {currentView === 'home' && (
          <HomeView
            onNavigate={handleNavigate}
            onOpenRoomDetail={handleOpenRoomDetail}
            onOpenVideoModal={() => setVideoModalOpen(true)}
            onOpenRoomBooking={() => handleOpenRoomBooking()}
            onOpenTableBooking={() => setTableBookingOpen(true)}
            onSearchRooms={handleSearchRooms}
          />
        )}

        {currentView === 'rooms' && (
          <RoomsView
            onNavigate={handleNavigate}
            onOpenRoomDetail={handleOpenRoomDetail}
            onOpenRoomBooking={handleOpenRoomBooking}
          />
        )}

        {currentView === 'room-detail' && (
          <RoomDetailView
            roomId={selectedRoomId}
            onNavigate={handleNavigate}
            onOpenRoomBooking={handleOpenRoomBooking}
          />
        )}

        {currentView === 'restaurant' && (
          <RestaurantView
            onOpenTableBooking={() => setTableBookingOpen(true)}
            onOpenMenuPdf={() => setMenuPdfModalOpen(true)}
          />
        )}

        {currentView === 'experiences' && (
          <ExperiencesView
            onOpenRoomBooking={() => handleOpenRoomBooking()}
          />
        )}

        {currentView === 'offers' && (
          <OffersView
            onOpenRoomBooking={() => handleOpenRoomBooking()}
          />
        )}

        {currentView === 'blog' && (
          <BlogView onOpenRoomBooking={() => handleOpenRoomBooking()} />
        )}

        {currentView === 'gallery' && (
          <GalleryView />
        )}

        {currentView === 'about' && (
          <AboutView onOpenRoomBooking={() => handleOpenRoomBooking()} />
        )}

        {currentView === 'contact' && (
          <ContactView />
        )}
      </main>

      {/* Footer for non-home views */}
      {currentView !== 'home' && <Footer onNavigate={handleNavigate} />}

      {/* Interactive Modals */}
      <BookingModal
        isOpen={roomBookingOpen}
        onClose={() => setRoomBookingOpen(false)}
        preselectedRoomId={selectedRoomId}
        initialCheckIn={searchParams.checkIn}
        initialCheckOut={searchParams.checkOut}
        initialAdults={searchParams.adults}
        initialChildren={searchParams.children}
      />

      <TableBookingModal
        isOpen={tableBookingOpen}
        onClose={() => setTableBookingOpen(false)}
      />

      <VideoModal
        isOpen={videoModalOpen}
        onClose={() => setVideoModalOpen(false)}
      />

      <MenuPdfModal
        isOpen={menuPdfModalOpen}
        onClose={() => setMenuPdfModalOpen(false)}
      />
    </div>
  );
}
