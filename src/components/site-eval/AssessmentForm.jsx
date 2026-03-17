import { useState } from 'react'
import InputField from '../common/InputField'
import SelectField from '../common/SelectField'
import TextareaField from '../common/TextareaField'
import ToggleField from '../common/ToggleField'
import FormSection from './FormSection'

function AssessmentForm() {
  const [formData, setFormData] = useState({
    siteName: '',
    assessorName: '',
    assessmentDate: '',
    propertyType: 'Residential',
    roofType: 'Gable',
    roofMaterial: 'Asphalt Shingle',
    roofPitch: '',
    roofCondition: 'Good',
    shadingLevel: 'Low',
    obstructionNotes: '',
    servicePanelSize: '',
    mainBreakerRating: '',
    breakerSpacesAvailable: '',
    meterLocation: '',
    panelConditionNotes: '',
    ladderAccessOk: false,
    atticAccessAvailable: false,
    tripHazards: false,
    animalHazards: false,
    safetyNotes: '',
  })

  function updateField(fieldName) {
    return (event) => {
      const value =
        event.target.type === 'checkbox'
          ? event.target.checked
          : event.target.value

      setFormData((currentData) => ({
        ...currentData,
        [fieldName]: value,
      }))
    }
  }

  return (
    <form className="space-y-6">
      <FormSection
        title="Assessment Info"
        description="Document who is completing the visit and the basic site information."
      >
        <InputField
          id="site-name"
          label="Site Name"
          value={formData.siteName}
          onChange={updateField('siteName')}
          placeholder="Example: Mesa Training House"
        />
        <InputField
          id="assessor-name"
          label="Assessor Name"
          value={formData.assessorName}
          onChange={updateField('assessorName')}
          placeholder="Student or instructor name"
        />
        <InputField
          id="assessment-date"
          label="Assessment Date"
          type="date"
          value={formData.assessmentDate}
          onChange={updateField('assessmentDate')}
        />
        <SelectField
          id="property-type"
          label="Property Type"
          value={formData.propertyType}
          onChange={updateField('propertyType')}
          options={[
            { value: 'Residential', label: 'Residential' },
            { value: 'Commercial', label: 'Commercial' },
            { value: 'Mixed Use', label: 'Mixed Use' },
          ]}
        />
      </FormSection>

      <FormSection
        title="Roof Details"
        description="Record the roof shape, material, and any conditions that could affect solar placement."
      >
        <SelectField
          id="roof-type"
          label="Roof Type"
          value={formData.roofType}
          onChange={updateField('roofType')}
          options={[
            { value: 'Gable', label: 'Gable' },
            { value: 'Hip', label: 'Hip' },
            { value: 'Flat', label: 'Flat' },
            { value: 'Shed', label: 'Shed' },
          ]}
        />
        <SelectField
          id="roof-material"
          label="Roof Material"
          value={formData.roofMaterial}
          onChange={updateField('roofMaterial')}
          options={[
            { value: 'Asphalt Shingle', label: 'Asphalt Shingle' },
            { value: 'Tile', label: 'Tile' },
            { value: 'Metal', label: 'Metal' },
            { value: 'Membrane', label: 'Membrane' },
          ]}
        />
        <InputField
          id="roof-pitch"
          label="Roof Pitch"
          value={formData.roofPitch}
          onChange={updateField('roofPitch')}
          placeholder="Example: 6/12"
        />
        <SelectField
          id="roof-condition"
          label="Roof Condition"
          value={formData.roofCondition}
          onChange={updateField('roofCondition')}
          options={[
            { value: 'Good', label: 'Good' },
            { value: 'Fair', label: 'Fair' },
            { value: 'Needs Review', label: 'Needs Review' },
          ]}
        />
        <SelectField
          id="shading-level"
          label="Shading Level"
          value={formData.shadingLevel}
          onChange={updateField('shadingLevel')}
          options={[
            { value: 'Low', label: 'Low' },
            { value: 'Moderate', label: 'Moderate' },
            { value: 'High', label: 'High' },
          ]}
        />
        <div className="md:col-span-2">
          <TextareaField
            id="obstruction-notes"
            label="Obstruction Notes"
            value={formData.obstructionNotes}
            onChange={updateField('obstructionNotes')}
            placeholder="List vents, skylights, chimneys, or nearby trees."
          />
        </div>
      </FormSection>

      <FormSection
        title="Electrical Details"
        description="Capture basic service panel information before taking panel and meter photos."
      >
        <InputField
          id="service-panel-size"
          label="Service Panel Size"
          value={formData.servicePanelSize}
          onChange={updateField('servicePanelSize')}
          placeholder="Example: 200A"
        />
        <InputField
          id="main-breaker-rating"
          label="Main Breaker Rating"
          value={formData.mainBreakerRating}
          onChange={updateField('mainBreakerRating')}
          placeholder="Example: 200A"
        />
        <InputField
          id="breaker-spaces"
          label="Breaker Spaces Available"
          value={formData.breakerSpacesAvailable}
          onChange={updateField('breakerSpacesAvailable')}
          placeholder="Example: 4"
        />
        <InputField
          id="meter-location"
          label="Meter Location"
          value={formData.meterLocation}
          onChange={updateField('meterLocation')}
          placeholder="Example: Exterior west wall"
        />
        <div className="md:col-span-2">
          <TextareaField
            id="panel-condition-notes"
            label="Panel Condition Notes"
            value={formData.panelConditionNotes}
            onChange={updateField('panelConditionNotes')}
            placeholder="Document rust, labeling concerns, or access limitations."
          />
        </div>
      </FormSection>

      <FormSection
        title="Access and Safety"
        description="Document site access and any hazards that students should watch for."
      >
        <ToggleField
          id="ladder-access"
          label="Ladder Access OK"
          checked={formData.ladderAccessOk}
          onChange={updateField('ladderAccessOk')}
        />
        <ToggleField
          id="attic-access"
          label="Attic Access Available"
          checked={formData.atticAccessAvailable}
          onChange={updateField('atticAccessAvailable')}
        />
        <ToggleField
          id="trip-hazards"
          label="Trip Hazards"
          checked={formData.tripHazards}
          onChange={updateField('tripHazards')}
        />
        <ToggleField
          id="animal-hazards"
          label="Animal Hazards"
          checked={formData.animalHazards}
          onChange={updateField('animalHazards')}
        />
        <div className="md:col-span-2">
          <TextareaField
            id="safety-notes"
            label="Safety Notes"
            value={formData.safetyNotes}
            onChange={updateField('safetyNotes')}
            placeholder="Capture anything the class should review before entering the site."
          />
        </div>
      </FormSection>

      <div className="rounded-2xl bg-white p-6 shadow-sm">
        <button
          type="button"
          className="inline-flex rounded-xl bg-emerald-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-emerald-700"
        >
          Continue to Photos
        </button>
      </div>
    </form>
  )
}

export default AssessmentForm
