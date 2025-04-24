<?php

namespace App\Entity;

use ApiPlatform\Metadata\ApiResource;
use App\Repository\VehicleRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;

#TODO - Add Location and Geofence classes
#TODO - Add Methods

#[ORM\Entity(repositoryClass: VehicleRepository::class)]
#[ApiResource]
class Vehicle
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\ManyToOne(inversedBy: 'ownedVehicles')]
    private ?User $owner = null;

    /**
     * @var Collection<int, User>
     */
    #[ORM\ManyToMany(targetEntity: User::class, inversedBy: 'drivenVehicles')]
    private Collection $drivers;

    #[ORM\Column(length: 20, nullable: true)]
    private ?string $vin = null;

    #[ORM\Column(length: 7, nullable: true)]
    private ?string $licensePlate = null;

    #[ORM\Column(length: 50, nullable: true)]
    private ?string $make = null;

    #[ORM\Column(length: 50, nullable: true)]
    private ?string $model = null;

    #[ORM\Column(nullable: true)]
    private ?int $year = null;

    #[ORM\Column(length: 50, nullable: true)]
    private ?string $color = null;

    #[ORM\Column(nullable: true)]
    private ?float $fuel = null;

    #[ORM\Column]
    private ?bool $isLocked = false;

    #[ORM\Column]
    private ?bool $isEngineOn = false;

    #[ORM\Column]
    private ?bool $isWindowOpen = false;

    #[ORM\OneToOne(cascade: ['persist', 'remove'])]
    private ?Location $currentLocation = null;

    #[ORM\OneToOne(cascade: ['persist', 'remove'])]
    private ?Geofence $geofence = null;

    /**
     * @var Collection<int, Notification>
     */
    #[ORM\OneToMany(targetEntity: Notification::class, mappedBy: 'vehicle', orphanRemoval: true)]
    private Collection $notifications;

    public function __construct()
    {
        $this->drivers = new ArrayCollection();
        $this->notifications = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function setId(?int $id): static
    {
        $this->id = $id;

        return $this;
    }

    public function getOwner(): ?User
    {
        return $this->owner;
    }

    public function setOwner(?User $owner): static
    {
        $this->owner = $owner;

        return $this;
    }

    /**
     * @return Collection<int, User>
     */
    public function getDrivers(): Collection
    {
        return $this->drivers;
    }

    public function addDriver(User $driver): static
    {
        if (!$this->drivers->contains($driver)) {
            $this->drivers->add($driver);
        }

        return $this;
    }

    public function removeDriver(User $driver): static
    {
        $this->drivers->removeElement($driver);

        return $this;
    }

    public function getVin(): ?string
    {
        return $this->vin;
    }

    public function setVin(?string $vin): static
    {
        $this->vin = $vin;

        return $this;
    }

    public function getLicensePlate(): ?string
    {
        return $this->licensePlate;
    }

    public function setLicensePlate(?string $licensePlate): static
    {
        $this->licensePlate = $licensePlate;

        return $this;
    }

    public function getMake(): ?string
    {
        return $this->make;
    }

    public function setMake(?string $make): static
    {
        $this->make = $make;

        return $this;
    }

    public function getModel(): ?string
    {
        return $this->model;
    }

    public function setModel(?string $model): static
    {
        $this->model = $model;

        return $this;
    }

    public function getYear(): ?int
    {
        return $this->year;
    }

    public function setYear(?int $year): static
    {
        $this->year = $year;

        return $this;
    }

    public function getColor(): ?string
    {
        return $this->color;
    }

    public function setColor(?string $color): static
    {
        $this->color = $color;

        return $this;
    }

    public function getFuel(): ?float
    {
        return $this->fuel;
    }

    public function setFuel(?float $fuel): static
    {
        $this->fuel = $fuel;

        return $this;
    }

    public function isLocked(): ?bool
    {
        return $this->isLocked;
    }

    public function setIsLocked(bool $isLocked): static
    {
        $this->isLocked = $isLocked;

        return $this;
    }

    public function isEngineOn(): ?bool
    {
        return $this->isEngineOn;
    }

    public function setIsEngineOn(bool $isEngineOn): static
    {
        $this->isEngineOn = $isEngineOn;

        return $this;
    }

    public function isWindowOpen(): ?bool
    {
        return $this->isWindowOpen;
    }

    public function setIsWindowOpen(bool $isWindowOpen): static
    {
        $this->isWindowOpen = $isWindowOpen;

        return $this;
    }

    public function getCurrentLocation(): ?Location
    {
        return $this->currentLocation;
    }

    public function setCurrentLocation(?Location $currentLocation): static
    {
        $this->currentLocation = $currentLocation;

        return $this;
    }

    public function getGeofence(): ?Geofence
    {
        return $this->geofence;
    }

    public function setGeofence(?Geofence $geofence): static
    {
        $this->geofence = $geofence;

        return $this;
    }

    /**
     * @return Collection<int, Notification>
     */
    public function getNotifications(): Collection
    {
        return $this->notifications;
    }

    public function addNotification(Notification $notification): static
    {
        if (!$this->notifications->contains($notification)) {
            $this->notifications->add($notification);
            $notification->setVehicle($this);
        }

        return $this;
    }

    public function removeNotification(Notification $notification): static
    {
        if ($this->notifications->removeElement($notification)) {
            // set the owning side to null (unless already changed)
            if ($notification->getVehicle() === $this) {
                $notification->setVehicle(null);
            }
        }

        return $this;
    }
}
